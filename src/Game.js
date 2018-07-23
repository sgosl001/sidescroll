import phaser from 'phaser';

export class Game extends phaser.Scene {
    constructor() {
        super({
            key: 'game',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
        });

        this.platforms = null;
        this.player = null;
        this.cursors = null;
    }

    init() {
        
    }
    
    create() {
        //map
        this.platforms = this.physics.add.staticGroup();

        for (let i = 0; i < 18; i++) {
            this.platforms.create(i * 50, 570, 'ground');
        }

        //this.player dude
        this.player = this.physics.add.sprite(100, 450, 'dude');

        this.player.setBounce(0);
        this.player.body.setGravityY(600);
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

        //platform collisions
        this.physics.add.collider(this.player, this.platforms);

        //movements
        this.cursors = this.input.keyboard.createCursorKeys();
    }


    update() {
        // PLAYER
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }

        else {
            this.player.setVelocityX(0);

            this.player.anims.play('stand', true);
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }
}