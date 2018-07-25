import phaser from 'phaser';
import { Preloader } from './Preloader';
import { Game } from './Game';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'content',
    scene: [
        Preloader,
        Game
    ]
};

const game = new phaser.Game(config);