import phaser from 'phaser';

export class Preloader extends phaser.Scene {
    constructor() {
        super({
            key: 'preloader'
        });
    }
      
    preload() {
        this.load.spritesheet('dude', 'assets/images/green.png', {
            frameWidth: 16,
            frameHeight: 18 
        });
    }

    create() {
        this.scene.start('game');
    }
}