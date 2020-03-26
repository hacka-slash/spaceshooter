//alert("hello");
var startButton, starfield, startText, startStyle, text, aboutButton, title, signInBtn, signUpBtn, isLoggedIn, playBtn;
var startMenu = {
    init: function () {

    },
    
    preload: function(){
        game.load.image('plybtn', 'assets/mybuttons/playnow.png', 193, 71);
        game.load.image('abtbtn', 'assets/mybuttons/about.png', 193, 71);
        game.load.image('signIn', 'assets/mybuttons/signin.png', 193, 71);
        game.load.image('signUp', 'assets/mybuttons/signup.png', 193, 71);
        game.load.image('highscrbtn', 'assets/mybuttons/highscore.png', 193, 71);
        game.load.image('starfield', 'assets/starfield.jpg');
        game.load.image('title', 'assets/mytext/logo.png');
        game.load.image('backBtn', 'assets/mybuttons/back.png', 193, 71);
        game.load.image('playBtn', 'assets/mybuttons/play.png', 193, 71);

    },
    create: function(game){
        // this.createButton(game, "Play", game.world.centerX, game.world.centerY + 32, 300, 100,
        // function() {
        //     this.state.start('open');
        // });

        // this.createButton(game, "About", game.world.centerX, game.world.centerY + 192, 300, 100,
        // function() {
        //     console.log("About");
        // });
        starfield = game.add.tileSprite(0, 0, game.width, game.height, 'starfield');


        

        signInBtn = game.add.button(game.width/2, game.height/2 + 50, 'signIn', () => {game.state.start('signIn')}, this, 2, 1, 0);
        signInBtn.anchor.setTo(0.5,0.5);

        signUpBtn = game.add.button(game.width/2, signInBtn.y + signInBtn.height + 10, 'signUp', () => {game.state.start('signUp')}, this, 2, 1, 0);
        signUpBtn.anchor.setTo(0.5,0.5);

        playBtn = game.add.button(game.width/2, signUpBtn.y + signUpBtn.height + 10, 'playBtn', () => {game.state.start('open')}, this, 2, 1, 0);
        playBtn.anchor.setTo(0.5,0.5);

        signInBtn.width = signUpBtn.width = playBtn.width = 100;
        signInBtn.height = signUpBtn.height = playBtn.height= 50;

        title = game.add.text(game.world.centerX, game.world.centerY - 100, 'SPACESHOOTER')
        title.anchor.setTo(0.5,0.5);

        //	Font style
        title.font = 'Arial Black';
        title.fontSize = 50;
        title.fontWeight = 'bold';

        //	Stroke color and thickness
        title.stroke = '#000000';
        title.strokeThickness = 6;
        title.fill = 'purple';

        isLoggedIn = false;

    
        //text.anchor.setTo(0.5,0.5);


    },
    update: function(game){
        starfield.tilePosition.y += 2;

    },

    createButton: function(game, string, x,y,w,h,callback){
        var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);

        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;

        var txt = game.add.text(button1.x, button1.y, string, {font:"14px Arial", fill
                                                                :"#fff", align:"center"});
        txt.anchor.setTo(0.5,0.5);
    },
    playGame: function(){
        //alert("hello");
        game.state.start('open');
    },
    about: function(){
        //console.log("About");
        game.state.start('gameOver');
    }

};

