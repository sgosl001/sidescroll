import phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'content',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new phaser.Game(config);
let platforms;
let player;
let cursors;

function preload() {
    this.load.image('ground', 'assets/images/gay-gr.jpg');
    this.load.spritesheet('dude', 'assets/images/BODY_skeleton.png', {
        frameWidth: 64,
        frameHeight: 64 
    });
}


function create() {
    //map
    platforms = this.physics.add.staticGroup();

    for (let i = 0; i < 18; i++) {
        platforms.create(i * 50, 570, 'ground');
    }

    //player dude
    player = this.physics.add.sprite(100, 450, 'dude'); 

    player.setBounce(0);
    player.body.setGravityY(300);
    player.setCollideWorldBounds(true);

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
        frames: [ { key: 'dude', frame: 22 } ],
        frameRate: 20,
    });
    
    //platform collisions
    this.physics.add.collider(player, platforms);

    //movements
    cursors = this.input.keyboard.createCursorKeys();
}


function update() {
    // //player moves
    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }

    else {
        player.setVelocityX(0);
        player.anims.play('stand', true);
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}