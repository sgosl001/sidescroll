import phaser from 'phaser';
import { Preloader } from './Preloader';
import { Game } from './Game';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'content',
    scene: [
        Preloader,
        Game
    ]
};

const game = new phaser.Game(config);