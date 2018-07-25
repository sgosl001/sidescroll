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
        this.player = this.physics.add.sprite(100, 10, 'dude');

        this.player.setBounce(0);
        this.player.body.setGravityY(0);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 9, end: 17 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 27, end: 35 }),
            frameRate: 10,
            repeat: -1

        });

        this.anims.create({
            key: 'stand',
            frames: [{ key: 'dude', frame: 22 }],
            frameRate: 20,
        });

        //movements
        this.cursors = this.input.keyboard.createCursorKeys();

        console.log(this.player);
    }


    update() {
        // PLAYER
        if (this.cursors.left.isDown || this.cursors.right.isDown || this.cursors.up.isDown || this.cursors.down.isDown) {
            if (this.cursors.left.isDown) {
                this.player.setVelocityX(-160);

                this.player.anims.play('left', true);
            }
            if (this.cursors.right.isDown) {
                this.player.setVelocityX(160);

                this.player.anims.play('right', true);
            }

            if (this.cursors.up.isDown) {
                this.player.setVelocityY(-160);
            }

            if (this.cursors.down.isDown) {
                this.player.setVelocityY(160);
            }

        }

        else {
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);

            this.player.anims.play('stand', true);
        }

    }
}