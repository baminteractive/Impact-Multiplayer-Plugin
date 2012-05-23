ig.module( 
	'game.main' 
)
.requires(

	'impact.game',

	'game.entities.player',
	'game.entities.enemy',
	'game.levels.main',
	'game.plugins.random',
	'game.plugins.multiplayer',
	
	'impact.debug.debug'
)
.defines(function(){

MyGame = MultiplayerGame.extend({
	
	gravity: 850,

	bindKeys: function() {

		ig.input.bind(ig.KEY.LEFT_ARROW, 'p_left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'p_right');
		ig.input.bind(ig.KEY.UP_ARROW, 'p_up');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'p_down');
		ig.input.bind(ig.KEY.A, 'p_action1');
		ig.input.bind(ig.KEY.S, 'p_action2');

	},

	update: function() {

		// Update all entities and backgroundMaps
		this.parent();
		
		// screen follows the player
		this.player = this.getEntitiesByType( EntityPlayer )[0];

		if( this.player ) {

			if(this.player.pos.x - ig.system.width/2 < 0) {

				this.screen.x = 0;

			} else if(this.player.pos.x - ig.system.width/2 > ig.game.collisionMap.width*ig.game.collisionMap.tilesize - ig.system.width) {

				this.screen.x = ig.game.collisionMap.width*ig.game.collisionMap.tilesize - ig.system.width;

			} else {

				this.screen.x = this.player.pos.x - ig.system.width/2;

			}

			this.screen.y = 0;

		}

	},

	initPlayer: function(remoteName, rX, rY, isLocal) {
	
		var x = rX || 100;
		var y = rY || 250;
		var i = this.players.length + 1;

		var player = this.spawnEntity( EntityPlayer, x, y,
			{
				id: i,
				name:'player' + i,
				remoteName: remoteName,
				isLocal: isLocal
			} );

		this.players.push(player);

		return player;

	},

	startGame: function(msg, data) {

		// Start positions
		var x = this.screen.x + 122;
		var y = this.screen.y + 268;
		var _this = this;

		// Loop through all players and add them to the game
		_.each(data, function(p){

			// Check if this is the current user
			if(p === this.gameInfo.playerID) {
				// Initializes the player in the game as a local
				// Adds the player to the ig.game.players array
				this.player = this.initPlayer(p, x, y, true);
			} else {
				// Initializes the player in the game as a remote
				// Adds the player to the ig.game.players array
				this.initPlayer(p, x, y, false);
			}

		}.bind(this));

		// Spawn an enemy
		this.spawnEntity(EntityEnemy, 700, 280, {});

		// Start syncing
		this.sync = true;

	},

	draw: function() {

		// Draw all entities and backgroundMaps
		this.parent();
		
	},

	init: function() {

		this.loadLevel(LevelMain);

		this.bindKeys();

		this.pubsub.subscribe(this.topics.START, this.startGame.bind(this));

		this.parent();
	},

});


// Start the Game with 60fps, a resolution of 800x600, scaled
// up by a factor of 1
ig.main( '#canvas', MyGame, 60, 800, 450, 1 );

});
