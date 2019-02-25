import Player from '../entities/Player';

class Game extends Phaser.Scene {
	constructor() {
		super({
			key: 'Game',
			physics: ''
		});
	}

	preload() {
		this.load.image('player', 'assets/images/Snake-icon.png');
	}

	create() {
		this.player = new Player(this, 200, 200, 'player');
	}

	update() {
		this.player.update();
	}
}

export default Game;
