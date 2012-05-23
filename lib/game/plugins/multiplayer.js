
// -----------------------------------------------------------------------------
// Impact Multiplayer Plugin
// Supports Impact 1.19
// http://XXX
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Libraries used by this plugin

/*
Copyright (c) 2010,2011,2012 Morgan Roderick http://roderick.dk
License: MIT – http://mrgnrdrck.mit-license.org
*/
(function(a){function e(a,b,d){function e(){var d=c[a],e=function(a){return function(){throw a}},f,g;for(f=0,g=d.length;f<g;f++){try{d[f].func(a,b)}catch(h){setTimeout(e(h),0)}}}if(!c.hasOwnProperty(a)){return false}if(d===true){e()}else{setTimeout(e,0)}return true}"use strict";var b={version:"1.0.4-dev"},c={},d=-1;if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){module.exports=b}exports.PubSub=b}else{a.PubSub=b}b.publish=function(a,b){return e(a,b,false)};b.publishSync=function(a,b){return e(a,b,true)};b.subscribe=function(a,b){if(!c.hasOwnProperty(a)){c[a]=[]}var e=(++d).toString();c[a].push({token:e,func:b});return e};b.unsubscribe=function(a){var b,d,e;for(b in c){if(c.hasOwnProperty(b)){for(d=0,e=c[b].length;d<e;d++){if(c[b][d].token===a){c[b].splice(d,1);return a}}}}return false};if(typeof define==="function"&&define.amd){define("pubsub",function(){return b})}})(this);

// https://github.com/wojodesign/local-storage-js
(function(){if(!this.localStorage)if(this.globalStorage)try{this.localStorage=this.globalStorage}catch(e){}else{var a=document.createElement("div");a.style.display="none";document.getElementsByTagName("head")[0].appendChild(a);if(a.addBehavior){a.addBehavior("#default#userdata");var d=this.localStorage={length:0,setItem:function(b,d){a.load("localStorage");b=c(b);a.getAttribute(b)||this.length++;a.setAttribute(b,d);a.save("localStorage")},getItem:function(b){a.load("localStorage");b=c(b);return a.getAttribute(b)},
removeItem:function(b){a.load("localStorage");b=c(b);a.removeAttribute(b);a.save("localStorage");this.length--;if(0>this.length)this.length=0},clear:function(){a.load("localStorage");for(var b=0;attr=a.XMLDocument.documentElement.attributes[b++];)a.removeAttribute(attr.name);a.save("localStorage");this.length=0},key:function(b){a.load("localStorage");return a.XMLDocument.documentElement.attributes[b]}},c=function(a){return a.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,
"-")};a.load("localStorage");d.length=a.XMLDocument.documentElement.attributes.length}}})();

//https://github.com/broofa/node-uuid
(function(){function v(a,b,c){var d=b&&c||0;if(typeof a=="string"){b=a=="binary"?new j(16):null;a=null}a=a||{};var e=a.random||(a.rng||i)();e[6]=e[6]&15|64;e[8]=e[8]&63|128;if(b){for(var f=0;f<16;f++){b[d+f]=e[f]}}return b||o(e)}function u(a,b,c){var d=b&&c||0;var e=b||[];a=a||{};var f=a.clockseq!=null?a.clockseq:r;var g=a.msecs!=null?a.msecs:(new Date).getTime();var h=a.nsecs!=null?a.nsecs:t+1;var i=g-s+(h-t)/1e4;if(i<0&&a.clockseq==null){f=f+1&16383}if((i<0||g>s)&&a.nsecs==null){h=0}if(h>=1e4){throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")}s=g;t=h;r=f;g+=122192928e5;var j=((g&268435455)*1e4+h)%4294967296;e[d++]=j>>>24&255;e[d++]=j>>>16&255;e[d++]=j>>>8&255;e[d++]=j&255;var k=g/4294967296*1e4&268435455;e[d++]=k>>>8&255;e[d++]=k&255;e[d++]=k>>>24&15|16;e[d++]=k>>>16&255;e[d++]=f>>>8|128;e[d++]=f&255;var l=a.node||q;for(var m=0;m<6;m++){e[d+m]=l[m]}return b?b:o(e)}function o(a,b){var c=b||0,d=k;return d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+"-"+d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]+d[a[c++]]}function n(a,b,c){var d=b&&c||0,e=0;b=b||[];a.toLowerCase().replace(/[0-9a-f]{2}/g,function(a){if(e<16){b[d+e++]=l[a]}});while(e<16){b[d+e++]=0}return b}var a=this;var b,c,d;var e=new Array(16);b=function(){var a,b=e,c=0;for(var c=0,a;c<16;c++){if((c&3)==0)a=Math.random()*4294967296;b[c]=a>>>((c&3)<<3)&255}return b};if(a.crypto&&crypto.getRandomValues){var f=new Uint32Array(4);d=function(){crypto.getRandomValues(f);for(var a=0;a<16;a++){e[a]=f[a>>2]>>>(a&3)*8&255}return e}}try{var g=require("crypto").randomBytes;c=g&&function(){return g(16)}}catch(h){}var i=c||d||b;var j=typeof Buffer=="function"?Buffer:Array;var k=[];var l={};for(var m=0;m<256;m++){k[m]=(m+256).toString(16).substr(1);l[k[m]]=m}var p=i();var q=[p[0]|1,p[1],p[2],p[3],p[4],p[5]];var r=(p[6]<<8|p[7])&16383;var s=0,t=0;var w=v;w.v1=u;w.v4=v;w.parse=n;w.unparse=o;w.BufferClass=j;w.mathRNG=b;w.nodeRNG=c;w.whatwgRNG=d;if(typeof module!="undefined"){module.exports=w}else{var x=a.uuid;w.noConflict=function(){a.uuid=x;return w};a.uuid=w}})()

// -----------------------------------------------------------------------------
// Impact-MP Multiplayer plugin

ig.module(
    'game.plugins.multiplayer'
)
.requires(
    'impact.impact',
    'impact.game',
    'impact.entity'
).defines(function() {

	// -----------------------------------------------------------------------------
	// Injecting properties and methods into Entity class for multiplayer
	ig.Entity.inject({

		isLocal: true, // Is this a local or remote Entity?

		remoteName: null, // The remote name of the Entity

		// Abstracting the controls
        controls: {
            up: false,
            down: false,
            left: false,
            right: false
        },

        setControl: function(id) {
    		this.controls[id] = true;
        	this.publishAction(id);
        },

        unsetControl: function(id) {
    		this.controls[id] = false;
        	this.publishAction(id);
        },

        // Publishes a Entity's action
        publishAction: function(id) {

        	ig.game.pubsub.publish(ig.game.topics.ACTION,
        		{
        			remoteName:this.remoteName, 
            		action: id,
            		result: this.controls[id],
            		pos: this.pos
            	});

        },

        receiveDamage: function(amount, other) {

            if(ig.game.isMultiplayer && other.isLocal) {

                ig.game.pubsub.publish(ig.game.topics.COLLISION, { other:other, entity:this, amount:amount });

            }

            this.parent( amount, other );

        },

        // Overwriting the init function to add a remoteName
        init: function( x, y, settings ) {

			this.id = ++ig.Entity._lastId;
			this.pos.x = x;
			this.pos.y = y;

			ig.merge( this, settings );

			if(!this.remoteName) {

				this.remoteName = this.name;

			}

		}

	});

	// -----------------------------------------------------------------------------
	// Extending the Game class for multiplayer

   MultiplayerGame = ig.Game.extend({

		isMultiplayer: true, // Is the game multiplayer?

		initiator: false, // Did you start the game?

		sync: false, // Should the game be attempting to sync

 		// URL to socket server
		socketURL: 'http://localhost:8181',

		// Reference to instance of socket.io
		socket: null,
   
		// Basic game info
		gameInfo:{
			'gameID':null,
			'playerID':null
		},

		// Reference to instance of PubSub library
		pubsub: PubSub,

		// Timer used for syncing
		timer: null,

 		// Sync rate in seconds
		syncRate: 1,

		// Array for quick access to player entities
		players: [],

		// Topics to subscribe to in the game
    	topics: {
			CONNECTED: 'mpg-connected',
			START: 'mpg-start',
			ACTION: 'mpg-action',
			SPAWN: 'mpg-spawn',
			COLLISION: 'mpg-collision',
			SYNC: 'mpg-sync',
			ENTITY_FUNC: 'mpg-entityfunc',
			END: 'mpg-end',
			MESSAGE: 'message',
		},

		// Topics received from the server
		socketTopics: {
			CONNECT: 'connect',
			DISCONNECT: 'disconnect',
			JOIN: 'join',
			START: 'mpg-start',
			ACTION: 'mpg-action',
			SYNC: 'mpg-sync',
			ENTITY_FUNC: 'mpg-entityfunc',
			SPAWN: 'mpg-spawn',
			COLLISION: 'mpg-collision',
			MESSAGE: 'message'
		},

		// Loop through all remote entities and select first
		// that matches remoteName
		getEntityByRemoteName: function(remoteName) {

			return _.find(this.entities, (function(e){

				if(e.remoteName) {

					return remoteName === e.remoteName;

				} else {

					return false;

				}

			}).bind(this));

		},

		// Grabs the game info from a global variable
		retrieveGameInfo: function(){

			// Override with URL gameID if it exists
			if(ig.global.gameID) {

				// Grab gameID from URL
				this.gameInfo.gameID = ig.global.gameID;

			} else {

				// We're creating a new game
				this.gameInfo.gameID = uuid.v1();

			}

			// Generates a new ID for the player
			this.gameInfo.playerID = uuid.v1();

		},

		// Joins the user to the game after a connection
		handleConnect: function() {

			this.connected = true;

			// Tell the server we're ready to GO!
			this.socket.emit('join', this.gameInfo, function(data){

				// Check if this player initiated the game
				if(data == '1') {

					this.initiator = true;

				}

			}.bind(this));

		},

		handleStart: function(data){

			this.joined = true;

			// Have your game listen for this topic to start
			this.pubsub.publish(this.topics.START, data);

		},

		// Triggers message to spawn an entity
		dispatchSpawn: function(msg, data){

			var packet = new MPPacket(this.gameInfo.gameID, this.gameInfo.playerID);
			packet.remoteName; // We'll let the server set this
			packet.data.type = data.type;
			packet.data.creatorID = data.remoteName;
			packet.data.pos = data.pos;
			
			var data = JSON.stringify(packet);

			this.socket.emit(this.socketTopics.SPAWN, data);

		},

		// Spawns an entity
		handleSpawn: function(data) {

			var data = JSON.parse(data); // Parse the incoming data
			var opts = {};

			// Check if an owning entity was passed
			if(data.remoteName != 'undefined'){
				opts.remoteName = data.remoteName;
			}

			// Spawn a new entity in the game
			this.spawnEntity( data.data.type, data.data.pos.x, data.data.pos.y, opts );

		},

		// Dispatches syncing of player health and enemy movement
		dispatchSync: function(msg, data){

			var packet = new MPPacket(this.gameInfo.gameID, this.gameInfo.playerID);

			var enemies = this.getEntitiesByType( EntityEnemy );

			packet.players = [];
			packet.enemies = [];

			// Grab player data
			_.each(this.players, function(p){

				var player = {};
				player.remoteName = p.remoteName;
				player.health = p.health;

				packet.players.push(player);

			});

			// Grab needed enemy data
			_.each(enemies, function(e){

				var enemy = {};
				enemy.remoteName = e.remoteName;
				enemy.pos = e.pos;

				packet.enemies.push(enemy);

			});

			var data = JSON.stringify(packet);

			this.socket.emit(this.socketTopics.SYNC, data);

		},

		// Syncs player health and enemy positions
		handleSync: function(data) {

			var data = JSON.parse(data); // Parse the incoming data

			// Sync player health and scores every second
			_.each(data.players, function(p){

				// Grab the entity by name
				var entity = this.getEntityByRemoteName(p.remoteName);
				entity.health = p.health;
				entity.score = p.score;
				// Set additional properties here

			}.bind(this));

			// Sync enemy positions
			_.each(data.enemies, function(e){

				var enemy = this.getEntityByRemoteName(e.remoteName);

				// Reset the entities position
				if(enemy) {
					enemy.pos = e.pos;
				}
			
			}.bind(this));

		},

		// Dispatches a movement
		// remoteName, type, data, pos
		dispatchAction: function(msg, data){

			var packet = new MPPacket(this.gameInfo.gameID, this.gameInfo.playerID);
			packet.remoteName = data.remoteName;
			packet.data.type = data.action;
			packet.data.result = data.result;
			packet.data.pos = data.pos;

			var data = JSON.stringify(packet);

			this.socket.emit(this.socketTopics.ACTION, data);

		},

		// Handler for game action messages
		handleAction: function(data) {

			var data = JSON.parse(data); // Parse the incoming data

			// Grab the entity that's being affected
			var entity = this.getEntityByRemoteName(data.remoteName);

			// We suggest using some sort of interpolation here
			entity.pos = data.data.pos;

			// We're starting an action so we want to set this immediately
			if( data.data.result != 'false' ) {

				entity.controls[data.data.type] = data.data.result;

			}

		},

		// Dispatches a movement
		// remoteName, type, data, pos
		dispatchEntityFunc: function(msg, data){

			var packet = new MPPacket(this.gameInfo.gameID, this.gameInfo.playerID);
			packet.remoteName = data.remoteName;
			packet.func = data.func;
			packet.data = data.args;

			var data = JSON.stringify(packet);

			this.socket.emit(this.socketTopics.ENTITY_FUNC, data);

		},

		// Handler for game action messages
		handleEntityFunc: function(data) {

			var data = JSON.parse(data); // Parse the incoming data

			// Grab the entity that's being affected
			var entity = this.getEntityByRemoteName(data.remoteName);

			if(entity) {

				// Call passed function on entity
				entity[data.func](data.data);

			}

		},

		// owner, other, damage
		dispatchCollision: function(msg, data) {

			var packet = new MPPacket(this.gameInfo.gameID, this.gameInfo.playerID);
			packet.remoteName = data.entity.remoteName;
			packet.amount = data.amount;
			packet.attackType = data.attackType;
			
			var data = JSON.stringify(packet);

			this.socket.emit(this.socketTopics.COLLISION, data);	

		},

		handleCollision: function(data) {

			var data = JSON.parse(data); // Parse the incoming data

			var entity = this.getEntityByRemoteName(data.remoteName);
			var player = this.getEntityByRemoteName(data.ownerName);

			if(entity) {

				entity.receiveDamage(data.amount, player, data.attackType);

			}

		},

		handleMessage: function(data) {

			console.log(data);

		},

		// Toggle off all actions, so they don't continue while
		// browser is out of focus
		toggleActionsOnBlur: function() {

			window.onblur = function(){

				// Loop through all the players
				_.each(this.players, function(p){

					// Disable all controls
					_.each(p.controls, function(c){
						c = false;
					});

				});

			}.bind(this);

		},

		initMultiplayerFeatures: function() {

			// Multiplayer toggle for single player versions
        	if(!this.isMultiplayer) return;

			try {

			    // Check for a global URL setting so it can be set outside
	        	// the main.js
	        	this.socketURL = ig.global.socketURL || this.socketURL;

	        	// Create connection
	        	this.socket = new io.connect(this.socketURL);

	        	// Handle error
				this.socket.on('error', function (reason){
	  				console.error('Unable to connect Socket.IO', reason);
				});

	        	// Attempt to grab game info from localStorage
	        	this.retrieveGameInfo();

	        	// Subscribe to game events
				this.pubsub.subscribe(this.topics.ACTION, this.dispatchAction.bind(this));
				this.pubsub.subscribe(this.topics.SPAWN, this.dispatchSpawn.bind(this));
				this.pubsub.subscribe(this.topics.COLLISION, this.dispatchCollision.bind(this));
				this.pubsub.subscribe(this.topics.SYNC, this.dispatchSync.bind(this));
				this.pubsub.subscribe(this.topics.ENTITY_FUNC, this.dispatchEntityFunc.bind(this));
				this.pubsub.subscribe(this.topics.KILL, this.dispatchKill.bind(this));

				// Subscribe to socket events
				this.socket.on(this.socketTopics.CONNECT, this.handleConnect.bind(this));
				this.socket.on(this.socketTopics.START, this.handleStart.bind(this));
				this.socket.on(this.socketTopics.ACTION, this.handleAction.bind(this));
				this.socket.on(this.socketTopics.SPAWN, this.handleSpawn.bind(this));
				this.socket.on(this.socketTopics.COLLISION, this.handleCollision.bind(this));
				this.socket.on(this.socketTopics.SYNC, this.handleSync.bind(this));
				this.socket.on(this.socketTopics.ENTITY_FUNC, this.handleEntityFunc.bind(this));
				this.socket.on(this.socketTopics.KILL, this.handleKill.bind(this));
				this.socket.on(this.socketTopics.MESSAGE, this.handleMessage.bind(this)); // Generic message handler

				// Handle resetting actions when the window loses focus
				this.toggleActionsOnBlur();

				// init timer
				this.timer = new ig.Timer();

			} catch (e) {

			   console.log(e);

			}

		},

		update: function(){

			// Game that initiated will sync on sync rate
			if(this.sync && this.initiator && this.timer.delta() > 0) {

				// Dispatch to SYNC
				this.pubsub.publish(this.topics.SYNC);

				//Reset timer
				this.timer.set(this.syncRate);

			}

			this.parent();

		},

        init: function(){

        	this.initMultiplayerFeatures();

        }       

    });

	// Interface for packets
	MPPacket = ig.Class.extend({

		gameID: null,
		ownerName: null,
		remoteName: null,
		timestamp:null,
		data: {},

		init: function(gameID, ownerName){

			gameID = gameID || null;
			ownerName = ownerName || null;

			this.gameID = gameID;
			this.ownerName = ownerName;
			this.timestamp = new Date().getTime();

		}

	});

});