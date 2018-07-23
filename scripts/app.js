var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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

var game = new Phaser.Game(config);
var platforms;
var player;
var cursors;

function preload() {
    this.load.image('ground', '../images/gay-gr.JPG');
    this.load.spritesheet('dude',
        '../images/BODY_skeleton.png',
        { frameWidth: 64, frameHeight: 64 })
}


function create() {
    //map
    platforms = this.physics.add.staticGroup();

    for (var i = 0; i < 18; i++) {
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
    //console.log('updated');
    // //player moves
    if (cursors.left.isDown) {
        console.log('pressing left');
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        console.log('pressing right');
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