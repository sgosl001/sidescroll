import Player from '../entities/Player';
import Enemy from '../entities/Enemy';

class Game extends Phaser.Scene {
	constructor() {
		super({
			key: 'Game'
		});
	}

	preload() {
		this.load.spritesheet('player', 'assets/images/green.png', {
			frameWidth: 16,
			frameHeight: 18 
		});

		this.load.spritesheet('dino', 'assets/images/dino.png', {
			frameWidth: 20,
			frameHeight: 20
		});
	}

	create() {
		// Enable input for the WASD
		this.keyboard = this.input.keyboard.addKeys('W,A,S,D');
		
		// Entities
		this.player = new Player(this, 200, 200, 'player');
		//this.enemy = new Enemy(this, 500, 200, 'dino');
		this.enemies = this.physics.add.group();

		// Add a new emeny at a random position every 3 seconds
		setInterval(() => {
			if (this.enemies.getLength() <= 10) {
				const x = Math.random() * window.innerWidth;
				const y = Math.random() * window.innerHeight;
				this.enemies.add(new Enemy(this, x, y, 'dino'));
			}
		}, 3000);	
	}

	update(time, delta) {
		this.player.update(this.keyboard);

		// Loop through array of enemies and call each one's update function
		for (let enemy of this.enemies.getChildren()) {
			enemy.update();
		}
	}
}

export default Game;
