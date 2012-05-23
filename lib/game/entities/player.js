ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)

.defines(function(){

	EntityPlayer = ig.Entity.extend({

		animSheet: new ig.AnimationSheet( 'media/players/PlayerSheet.png', 149, 89 ),

		// The players (collision) size is a bit smaller than the animation
		// frames, so we have to move the collision box a bit (offset)
		size: {x: 40, y:80},
		offset: {x: 50, y: 0},

		maxVel: { x: 200, y: 400 },
		type: ig.Entity.TYPE.A, // Player friendly group
		checkAgainst: ig.Entity.TYPE.BOTH,
		collides: ig.Entity.COLLIDES.PASSIVE,

		killed:false,

		speed: {
			walk:225,
			jump:450
		},

		damage: {
			melee:30
		},

		flip: false, 

		attacking: false,

		inputs: {
			left: null,
			right: null,
			up: null,
			down: null,
			action1:null,
			action2:null,
			action3:null
		},

		checkInputs: function() {

			// Left
			if(ig.input.pressed(this.inputs.left)) {
				this.setControl('left');
			}

			if(ig.input.released(this.inputs.left)) {
				this.unsetControl('left');
			}

			// Right
			if(ig.input.pressed(this.inputs.right)) {
				this.setControl('right');
			}

			if(ig.input.released(this.inputs.right)) {
				this.unsetControl('right');
			}

			// Up
			if(ig.input.pressed(this.inputs.up)) {
				this.setControl('up');
			}

			if(ig.input.released(this.inputs.up)) {
				this.unsetControl('up');
			}

			// Down
			if(ig.input.pressed(this.inputs.down)) {
				this.setControl('down');
			}

			if(ig.input.released(this.inputs.down)) {
				this.unsetControl('down');
			}

			// Action1/Melee
			if(ig.input.pressed(this.inputs.action1)) {
				this.setControl('action1');
			}

			if(ig.input.released(this.inputs.action1)) {
				this.unsetControl('action1');
			}

			// Action2/Jump
			if(ig.input.pressed(this.inputs.action2)) {
				this.setControl('action2');
			}

			if(ig.input.released(this.inputs.action2)) {
				this.unsetControl('action2');
			}

		},

		moveEntity: function(){

			//Left/Right Movement
			if(this.controls.left && !this.controls.right ) {

				this.currentAnim = this.anims.walk;
				this.currentAnim.stop = false;

				this.vel.x = -this.speed.walk;
				this.flip = true;

			} else if( this.controls.right && !this.controls.left) {

				this.currentAnim = this.anims.walk;
				this.currentAnim.stop = false;
				
				this.vel.x = this.speed.walk;
				this.flip = false;

			} else {

				// Stop player movement
				this.vel.x = 0;

			}

			if( !this.attacking && this.vel.x == 0 && this.vel.y == 0) {

				this.currentAnim = this.anims.idle;

			}

		},

		handleAction: function() {

			// Melee
			if( !this.attacking && this.controls.action1 ){

				this.currentAnim = this.anims.attack;
				this.currentAnim.rewind();

				this.attacking = true;
			}

			// Jump
			if( this.standing && this.controls.action2 ) {

				this.vel.y = -this.speed.jump;
				this.currentAnim = this.anims.jump;

			}

			//Reset attack on animation end
			if( this.attacking && this.currentAnim.loopCount > 0 ){

				this.attacking = false;

			}

		},

		update: function() {

			if(!this.killed) {

				this.moveEntity();

				this.handleAction();

			} else {

				this.vel.x = this.vel.y = 0;

			}

			if(this.isLocal) {

				this.checkInputs();

			}

			// Flip animation based on direction
			this.currentAnim.flip.x = this.flip;

			this.parent();

		},

		receiveDamage: function(amount, other){

			if(this.attacking){

				other.receiveDamage( this.damage.melee );

			} else {

				this.parent(amount, other);

			}

		},

		// Overriding the kill function to play a death animation
		kill: function() {

			if( this.currentAnim !== this.anims.death ) {

				this.killed = true;

				// Trigger the death animation
				this.currentAnim = this.anims.death;
				this.currentAnim.rewind();

				this.vel.x = this.vel.y = 0;

				// Disable collisions
				this.collides = ig.Entity.COLLIDES.LITE;

			}

		},

		init: function (x, y, settings) {

		    this.parent(x, y, settings);

			// Map player inputs
			this.inputs.left = 'p_left';
			this.inputs.right = 'p_right';
			this.inputs.up = 'p_up';
			this.inputs.down = 'p_down';
			this.inputs.action1 = 'p_action1';
			this.inputs.action2 = 'p_action2';

			// Set animations
			this.addAnim( 'idle', 1, [1], true );
			this.addAnim( 'walk', .07, [2, 3, 4, 5] );
			this.addAnim( 'attack', .07, [6,7,8,9,8,9,7,6], true );
			this.addAnim( 'jump', 1, [10,11,12], true );
			this.addAnim( 'death', .07, [31,32,33,34,35,36], true );

			// Set initial animation
			this.currentAnim = this.anims.idle;

	    }

	});    

});