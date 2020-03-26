//const mongoose = require('mongoose');
var game = new Phaser.Game('100%','100%', Phaser.Auto, 'gameArea');

game.state.add('open', openState);
game.state.add('mainMenu', mainMenu);
//game.state.add('test', testing);
game.state.add('gameOver', gameOver);
game.state.add('signIn', signIn);
game.state.add('signUp', signUp)
game.state.add('startMenu', startMenu);

//game.state.start('mainMenu');
//game.state.start('signUp');
game.state.start('startMenu', startMenu);