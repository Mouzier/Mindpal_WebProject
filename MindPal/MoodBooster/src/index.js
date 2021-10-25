import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import spaceImg from './assets/space2.png';
import brainImg from './assets/brain.png';
import spaceshipImg from './assets/spaceship.png';
import laserImg from './assets/laser.png';
import groundImg from './assets/platform.png';
import sadImg from './assets/sad(1).png';
import bombImg from './assets/bomb.png';
import dudeImg from './assets/dude.png';

    var player;
    var stars;
    var bombs;
    var platforms;
    var cursors;
    var score = 0;
    var gameOver = false;
    var scoreText;
    var brainnn;

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }
    
    /*function*/ preload ()
    {
        this.load.image('space', spaceImg);
        this.load.image('brain',brainImg);
        this.load.image('spaceship',spaceshipImg);
        this.load.image('laser',laserImg);
        this.load.image('ground', groundImg);
        this.load.image('star', sadImg);
        this.load.image('bomb', bombImg);
        this.load.spritesheet('dude', dudeImg, { frameWidth: 32, frameHeight: 48 });
    }
    
    /*function*/ create ()
    {
        //  A simple background for our game
        this.add.image(600, 325, 'space');
        brainnn = this.physics.add.staticGroup();
        brainnn.create(600,750,'brain').setScale(3).refreshBody();
        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = this.physics.add.staticGroup();
    
        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        platforms.create(600, 650, 'ground').setScale(2).refreshBody();
        // The player and its settings
        player = this.physics.add.sprite(600, 450, 'dude');
    
        //  Player physics properties. Give the little guy a slight bounce.
        //player.setBounce();
        player.setCollideWorldBounds(true);
    
        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    
        //  Input Events
        cursors = this.input.keyboard.createCursorKeys();
    
        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 200, y: 0, stepX: 70 },
        });
    
        stars.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
        });
    
        bombs = this.physics.add.group();
    
        //  The score
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
    
        //  Collide the player and the stars with the platforms
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(bombs, platforms);
    
        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(player, stars, collectStar, null, this);
    
        this.physics.add.collider(player, bombs, hitBomb, null, this);
    }
    /*function*/ update ()
    {
        if (gameOver)
        {
            return;
        }
    
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
    
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
    
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
    
            player.anims.play('turn');
        }
    
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-20);
        }
    }
    
    /*function*/ collectStar (player, star)
    {
        star.disableBody(true, true);
    
        //  Add and update the score
        score += 10;
        scoreText.setText('Score: ' + score);
    
        if (stars.countActive(true) === 0)
        {
            //  A new batch of stars to collect
            stars.children.iterate(function (child) {
    
                child.enableBody(true, child.x, 0, true, true);
    
            });
    
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
    
        }
    }
    
    /*function*/ hitBomb (player, bomb)
    {
        this.physics.pause();
    
        player.setTint(0xff0000);
    
        player.anims.play('turn');
    
        gameOver = true;
    }
}




var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 650,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 50 },
            debug: false
        }
    },
    scene: MyGame
};

var game = new Phaser.Game(config);
