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
		
		// Create a new Player entity  
		this.player = new Player(this, 200, 200, 'player');

		// This would add a single enemy 
		//this.enemy = new Enemy(this, 500, 200, 'dino');

		// Create a new group and make sure they can't collide with eachother
		this.enemies = this.physics.add.group({ immovable: true });

		// Add a new emeny to the enemies group  at a random X,Y position every 3 seconds (3000 milliseconds)
		setInterval(() => {
			if (this.enemies.getLength() <= 10) {
				// Generate random numbers with max value of screen width/height
				const x = Math.random() * window.innerWidth;
				const y = Math.random() * window.innerHeight;
				this.enemies.add(new Enemy(this, x, y, 'dino'));
			}
		}, 3000);	
	}

	update() {
		/**
		 * Pass the keyboard object created at line 7 so that
		 * we could handle keyboard input from the Player update function
		 */
		this.player.update(this.keyboard);

		// Loop through array of enemies and call each one's update function
		for (let enemy of this.enemies.getChildren()) {
			enemy.update();
		}
	}
}

export default Game;
