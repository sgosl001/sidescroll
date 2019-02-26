import phaser from 'phaser';
import Game from './scenes/Game';

const config = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	parent: 'content',
	physics: {
		default: 'arcade',
		arcade: {
			debug: true
		}
	},
	scene: [
			Game
	]
};

const game = new phaser.Game(config);
