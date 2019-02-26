class Enemy extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, key) {
		super(scene, x, y, key);
		this.scene = scene;
		
		scene.sys.updateList.add(this);
		scene.sys.displayList.add(this);
		scene.physics.world.enableBody(this);
		this.setScale(3);
		this.setCollideWorldBounds(true);
		this.setImmovable(true);

		// Call the provided function when this collides with player
		scene.physics.world.addCollider(this, scene.player, () => {
			console.log('collided');
		});

		// Setup animations based on frames from spritesheet
	}
	
	update() {
		const { player } = this.scene;

		// Follow the player
		this.scene.physics.moveToObject(this, player, 60);

	}
}

export default Enemy;
