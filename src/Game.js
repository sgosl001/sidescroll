import phaser from 'phaser';

export class Game extends phaser.Scene {
    constructor() {
        super({
            key: 'game',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: false
                }
            },
        });

        this.player = null;
        this.cursors = null;
    }

    init() {
        console.log(this);
        this.canvasHeight = this.data.systems.canvas.height;
        this.canvasWidth = this.data.systems.canvas.width;
    }

    create() {
        //this.player dude
        this.player = this.physics.add.sprite(100, 10, 'dude').setScale(3);

        this.player.setBounce(0);
        this.player.body.setGravityY(0);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1

        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('dude', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'stand',
            frames: [{ key: 'dude', frame: 0 }],
            frameRate: 20
        });

        //movements
        this.cursors = this.input.keyboard.createCursorKeys();
    }


    update() {
        // PLAYER
        if (!(this.cursors.up.isDown || this.cursors.down.isDown || this.cursors.left.isDown || this.cursors.right.isDown)) {
            this.player.anims.play('stand', true);
        }

        else if (this.cursors.up.isDown) {
            this.player.y -= 5;
            this.player.anims.play('up', true);
        }

        else if (this.cursors.down.isDown) {
            this.player.y += 5;
            this.player.anims.play('down', true);
        }

        else if (this.cursors.left.isDown) {
            this.player.x -= 5;
            this.player.anims.play('left', true);
        }

        else if (this.cursors.right.isDown) {
            this.player.x += 5;
            this.player.anims.play('right', true);
        }

        if (this.cursors.up.isDown && this.cursors.left.isDown) {
            this.player.x -= 5;
            this.player.anims.play('up', true);
        }

        if (this.cursors.up.isDown && this.cursors.right.isDown) {
            this.player.x += 5;
            this.player.anims.play('up', true);
        }

        if (this.cursors.down.isDown && this.cursors.left.isDown) {
            this.player.x -= 5;
            this.player.anims.play('down', true);
        }

        if (this.cursors.down.isDown && this.cursors.right.isDown) {
            this.player.x += 5;
            this.player.anims.play('down', true);
        }




    }
}