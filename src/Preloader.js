import phaser from 'phaser';

export class Preloader extends phaser.Scene {
    constructor() {
        super({
            key: 'preloader'
        });
    }
      
    preload() {
        this.load.spritesheet('dude', 'assets/images/BODY_skeleton.png', {
            frameWidth: 64,
            frameHeight: 64 
        });
    }

    create() {
        this.scene.start('game');
    }
}