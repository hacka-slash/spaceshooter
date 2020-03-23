const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/js/phaser.min.js', (req, res) => {
    res.sendFile(__dirname + "/js/phaser.min.js");
});

app.get('/js/prefabs/BigUfo.js', (req, res) => {
    res.sendFile(__dirname + "/js/prefabs/BigUfo.js");
});

app.get('/js/states/mainMenu.js', (req, res) => {
    res.sendFile(__dirname + "/js/states/mainMenu.js");
});

app.get('/js/states/myState0.js', (req, res) => {
    res.sendFile(__dirname + "/js/states/myState0.js");
});

app.get('/js/states/gameOver.js', (req, res) => {
    res.sendFile(__dirname + "/js/states/gameOver.js");
});

app.get('/js/states/changeStates.js', (req, res) => {
    res.sendFile(__dirname + "/js/states/changeStates.js");
});

app.get('/js/states/main.js', (req, res) => {
    res.sendFile(__dirname + "/js/states/main.js");
});

app.get('/js/phaser-virtual-joystick.min.js', (req, res) => {
    res.sendFile(__dirname + "/js/phaser-virtual-joystick.min.js");
});

app.get('/js/prefabs/BasicEnemy0.js', (req, res) => {
    res.sendFile(__dirname + "/js/prefabs/BasicEnemy0.js");
});

app.get('/js/prefabs/UfoEnemy.js', (req, res) => {
    res.sendFile(__dirname + "/js/prefabs/UfoEnemy.js");
});

app.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + "/js/main.js");
});

app.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + "/js/main.js");
});

app.get('/assets/mybuttons/playnow.png', (req, res) => {
    res.sendFile(__dirname + "/assets/mybuttons/playnow.png");
});

app.get('/assets/starfield.jpg', (req, res) => {
    res.sendFile(__dirname + "/assets/starfield.jpg");
});

app.get('/assets/mybuttons/highscore.png', (req, res) => {
    res.sendFile(__dirname + "/assets/mybuttons/highscore.png");
});

app.get('/assets/mybuttons/about.png', (req, res) => {
    res.sendFile(__dirname + "/assets/mybuttons/about.png");
});

app.get('/assets/mytext/logo.png', (req, res) => {
    res.sendFile(__dirname + "/assets/mytext/logo.png");
});




app.get('/assets/joystick/arcade-joystick.png', (req, res) => {
    res.sendFile(__dirname + "/assets/joystick/arcade-joystick.png");
});

app.get('/assets/thrust.png', (req, res) => {
    res.sendFile(__dirname + "/assets/thrust.png");
});

app.get('/assets/laser.png', (req, res) => {
    res.sendFile(__dirname + "/assets/laser.png");
});

app.get('/assets/enemylaser1.png', (req, res) => {
    res.sendFile(__dirname + "/assets/enemylaser1.png");
});

app.get('/assets/spritesheets/enemy/basicenemy0.png', (req, res) => {
    res.sendFile(__dirname + "/assets/spritesheets/enemy/basicenemy0.png");
});

app.get('/assets/spritesheets/enemy/ufoenemy.png', (req, res) => {
    res.sendFile(__dirname + "/assets/spritesheets/enemy/ufoenemy.png");
});

app.get('/assets/spritesheets/explosions/explosionsheet.png', (req, res) => {
    res.sendFile(__dirname + "/assets/spritesheets/explosions/explosionsheet.png");
});

app.get('/assets/joystick/arcade-joystick.json', (req, res) => {
    res.sendFile(__dirname + "/assets/joystick/arcade-joystick.json");
});


app.get('/assets/spritesheets/explosions/bigexplosion/bigexplosionsheet.png', (req, res) => {
    res.sendFile(__dirname + "/assets/spritesheets/explosions/bigexplosion/bigexplosionsheet.png");
});

app.get('/assets/bigufo.png', (req, res) => {
    res.sendFile(__dirname + "/assets/bigufo.png");
});

app.get('/assets/laserball.png', (req, res) => {
    res.sendFile(__dirname + "/assets/laserball.png");
});

app.get('/assets/spritesheets/explosions/explosionsplayer.png', (req, res) => {
    res.sendFile(__dirname + "/assets/spritesheets/explosions/explosionsplayer.png");
});

app.get('/assets/spritesheets/explosions/explosionsplayer.json', (req, res) => {
    res.sendFile(__dirname + "/assets/spritesheets/explosions/explosionsplayer.json");
});

app.get('/assets/spritesheets/explosions/bigexplosion/bigexplosionsheet.json', (req, res) => {
    res.sendFile(__dirname + "/assets/spritesheets/explosions/bigexplosion/bigexplosionsheet.json");
});

app.get('/assets/spritesheets/explosions/explosionjson.json', (req, res) => {
    res.sendFile(__dirname + "/assets/spritesheets/explosions/explosionjson.json");
});



//GAME-OVER:

app.get('/assets/mytext/arcade.png', (req, res) => {
    res.sendFile(__dirname + "/assets/mytext/arcade.png");
});

app.get('/assets/mybuttons/playagain.png', (req, res) => {
    res.sendFile(__dirname + "/assets/mybuttons/playagain.png");
});

app.get('/assets/mytext/arcade.xml', (req, res) => {
    res.sendFile(__dirname + "/assets/mytext/arcade.xml");
});


app.listen(2000, () => {
    console.log("Hellooooo World!");
})