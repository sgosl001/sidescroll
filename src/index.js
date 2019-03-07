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
			debug: false // Setting this property to true makes the hit boxes show up
		}
	},
	scene: [Game] // Add more scenes to this array if we want to
};

const game = new phaser.Game(config);
