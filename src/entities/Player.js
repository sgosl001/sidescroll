class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, key) {
		super(scene, x, y, key);
		this.scene = scene;

		// Stuff required to add this to the scene
		scene.sys.updateList.add(this);
		scene.sys.displayList.add(this);
		scene.physics.world.enableBody(this);

		// Our stuff
		this.setScale(3);
		this.setCollideWorldBounds(true);
		this.setImmovable(true);
		this.VELOCITY = 128;

		// Setting up animations from the spritesheet
		scene.anims.create({
				key: 'left',
				frames: scene.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
				frameRate: 10
		});
		scene.anims.create({
				key: 'right',
				frames: scene.anims.generateFrameNumbers('player', { start: 9, end: 11 }),
				frameRate: 10

		});
		scene.anims.create({
				key: 'down',
				frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
				frameRate: 10
		});
		scene.anims.create({
				key: 'up',
				frames: scene.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
				frameRate: 10
		});
		scene.anims.create({
			key: 'stand',
			frames: [{ key: 'player', frame: 0 }],
			frameRate: 10
		});
	}

	update(keyboard) {
		// Movement
		if (keyboard.W.isDown) {
			this.setVelocityY(-this.VELOCITY);
		}
		if (keyboard.A.isDown) {
			this.setVelocityX(-this.VELOCITY);
		}
		if (keyboard.S.isDown) {
			this.setVelocityY(this.VELOCITY);
		}
		if (keyboard.D.isDown) {
			this.setVelocityX(this.VELOCITY);
		}
		if (keyboard.W.isUp && keyboard.S.isUp) {
			this.setVelocityY(0);
		}
		if (keyboard.A.isUp && keyboard.D.isUp) {
			this.setVelocityX(0);
		}
		
		// Specify which animation to play depending on velocity
		if (this.body.velocity.x > 0) {
			this.play('right', true);
		} else if (this.body.velocity.x < 0) {
			this.play('left', true);
		} else if (this.body.velocity.y > 0) {
			this.play('down', true);
		} else if (this.body.velocity.y < 0) {
			this.play('up', true);
		} else {
			this.play('stand', true);
		}
	}
}

export default Player;
