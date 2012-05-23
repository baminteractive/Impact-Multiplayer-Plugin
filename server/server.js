// Look into using https://github.com/nodejitsu/forever so we don't have to restart node on errors

// note, io.listen(<port>) will create a http server for you
var
  socketio = require('socket.io'),
  _ = require('underscore'),
  uuid = require('node-uuid'),
  http = require('http'),
  port = 8181,
	games = [], // List of all games on the server
  maxPlayers = 2; // Max number of players per game

// Handle exceptions so we don't crash the server
process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

// Creates a game namespace and shove it in the games array
function createGame(gameID, playerID){

  var game = {
    gameID: gameID,
    players: [],
    started: false
  };

  // Add the playerID
  if(playerID) {
    game.players.push(playerID);    
  }

  // Add to namespaces array
  games.push(game);

  return game;

}

// HTTP Server
var server = http.createServer(function(request, response) {
    
    // Since this is just a node server, we're returning 404s
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404");
    response.end();

});

server.listen(port, function(){

  var env = process.env.NODE_ENV || 'development';
  console.log("Socket.io server listening on port %d in %s mode", port, env);

});

var io = socketio.listen(server);

// Config for all 
io.configure(function(){

  io.set('transports', [
    'websocket',
    'flashsocket'
  ]);

  io.set('flash policy server', true);
  io.set('flash policy port', 10843);

});

io.sockets.on('connection', function (socket) {

  // Called by client when they're ready to join the game
  // Data contains a gameID and playerID
  socket.on('join', function (data, fn) {

    // Check to see if this game already exists
    // If not, create the game and add to namespaces
    var game = _.find(games, function(g){
      return data.gameID === g.gameID;
    });

    var initiator = false;

    // Check if the namespace already exists
    if(game === undefined) {

      // Add the game to the list
      // gameID, playerID
      game = createGame(data.gameID, data.playerID);

      initiator = true;

      // Join the game
      socket.join(data.gameID);

    } else {

      // Game exists

      var playerExists = (_.indexOf(game.players, data.playerID) !== -1);

      // Check if this player is already in the game
      if(playerExists){

        // Player already exists
        // Rejoin the player to the game
        socket.join(data.gameID);

        // Tell the client to start the game if it's already started
        if(game.started) {
          socket.emit('mpg-start', game.players);
        }

      } else if(!playerExists && game.players.length < maxPlayers) {

        // There's room. Add this player.
        game.players.push(data.playerID);         

        // Join the game
        socket.join(data.gameID);

      } else {

        // Room is full
        socket.emit('message', 'Room is full.');

      }

      console.log(game.players);

      // Check if the game is full and not started, which means it can start
      if(game.players.length === maxPlayers && game.started === false) {

        game.started = true;

        console.log('emitting start');

        // Trigger the start event to the room only
        io.sockets.to(data.gameID).emit('mpg-start', game.players);

      }

    }

    // Callback with number of players in the game
    fn(game.players.length);

    // Bind to show actions
    socket.on('mpg-action', function (data) {

      var d = JSON.parse(data); // Parse remote data

      // Broadcast this out to the room
      socket.broadcast.to(data.gameID).emit('mpg-action', data);

    });

    // Manages spawning entities
    socket.on('mpg-spawn', function (data) {

      var d = JSON.parse(data); // Parse remote data

      // Assign a remoteName to the entity
      d.remoteName = uuid.v1();

      // Broadcast this out to everyone in the game
      io.sockets.to(d.gameID).emit('mpg-spawn', JSON.stringify(d));

    });

    socket.on('mpg-collision', function (data) {

        var d = JSON.parse(data); // Parse remote data

        // Broadcast this out to the room
        socket.broadcast.to(d.gameID).emit('mpg-collision', data);

    });

    socket.on('mpg-kill', function (data) {

        var d = JSON.parse(data); // Parse remote data

        // Broadcast this out to the room
        socket.broadcast.to(d.gameID).emit('mpg-kill', data);

    });

    socket.on('mpg-entityfunc', function (data) {

        var d = JSON.parse(data); // Parse remote data

        // Broadcast this out to the room
        io.sockets.to(d.gameID).emit('mpg-entityfunc', data);

    });

    socket.on('mpg-sync', function (data) {

        var d = JSON.parse(data); // Parse remote data

        // Broadcast this out to the room
        socket.broadcast.to(d.gameID).emit('mpg-sync', data);

    });

    socket.on('mpg-end', function (data) {

        var d = JSON.parse(data); // Parse remote data

        // Broadcast this out to the room
        io.sockets.to(d.gameID).emit('mpg-end', data);

    });

    // Manages player disconnect
    socket.on('disconnect', function (data) {

      io.sockets.to(game.gameID).emit('user disconnected');

    });

  });

});