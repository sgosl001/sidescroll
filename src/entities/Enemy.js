class Enemy extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, key) {
		super(scene, x, y, key);
		this.scene = scene;
		
		// Shit required to add an object of this class to the scene
		scene.sys.updateList.add(this);
		scene.sys.displayList.add(this);
		scene.physics.world.enableBody(this);

		// Scale up 3x, collide with walls, block it from colliding with other entities
		this.setScale(3);
		this.setCollideWorldBounds(true);
		this.setImmovable(true);

		// Call the provided function when this collides with player
		scene.physics.world.addCollider(this, scene.player, () => {
			console.log('collided');
		});
	}
	
	update() {
		const { player } = this.scene;

		// Follow the player that was created in the scene
		this.scene.physics.moveToObject(this, player, 60);

	}
}

export default Enemy;
