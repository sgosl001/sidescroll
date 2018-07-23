import phaser from 'phaser';

export class Preloader extends phaser.Scene {
    constructor() {
        super({
            key: 'preloader'
        });
    }

    init() {
        console.log('init preloader');
        console.log(this);
    }
    
    preload() {
        
    }

    create() {
        this.scene.start('game');
    }
}