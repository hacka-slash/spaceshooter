//alert("hello");
var startButton, starfield, startText, startStyle, text, aboutButton, title, labelUsername, labelPassword, userNameBox, passwordBox, signInBtn, userName, password, userNameText, passwordText, backBtn, globalName;

var signIn = {
    init: function () {

    },
    
    preload: function(){
        game.load.image('plybtn', 'assets/mybuttons/playnow.png', 193, 71);
        game.load.image('abtbtn', 'assets/mybuttons/about.png', 193, 71);
        game.load.image('highscrbtn', 'assets/mybuttons/highscore.png', 193, 71);
        game.load.image('starfield', 'assets/starfield.jpg');
        game.load.image('title', 'assets/mytext/logo.png');
        game.load.image('textbox', 'assets/blackbox.png')
        game.load.image('signInBtn', 'assets/mybuttons/signin.png', 90, 35);
        game.load.image('backBtn', 'assets/mybuttons/back.png', 193, 71);


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

        // startButton = game.add.button(game.width/2, game.height/2 + 50, 'plybtn', this.playGame, this, 2, 1, 0);
        // startButton.anchor.setTo(0.5,0.5);
        // aboutButton = game.add.button(game.width/2, startButton.y + startButton.height + 10, 'abtbtn', this.about, this, 2, 1, 0);
        // aboutButton.anchor.setTo(0.5,0.5);

        // title = game.add.text(game.world.centerX, game.world.centerY - 100, 'Please Sign In');
        // title.anchor.setTo(0.5,0.5);

        // //	Font style
        // title.font = 'Arial Black';
        // title.fontSize = 50;
        // title.fontWeight = 'bold';

        // //	Stroke color and thickness
        // title.stroke = '#000000';
        // title.strokeThickness = 6;
        // title.fill = 'purple';

        labelUsername = game.add.text(20, 200, 'Username:');
        //labelUsername.anchor.setTo(0.5,0.5);

        //	Font style
        labelUsername.font = 'Arial Black';
        labelUsername.fontSize = 25;
        labelUsername.fontWeight = 'bold';

        //	Stroke color and thickness
        labelUsername.stroke = '#000000';
        labelUsername.strokeThickness = 6;
        labelUsername.fill = 'purple';

        userNameBox = game.add.button(labelUsername.x + labelUsername.width + 10, labelUsername.y, 'textbox', this.fillUserName, this, 2, 1, 0);
        userNameBox.width += 75;


        labelPassword = game.add.text(20, labelUsername.y + 100, 'Password:');
        //labelPassword.anchor.setTo(0.5,0.5);

        //	Font style
        labelPassword.font = 'Arial Black';
        labelPassword.fontSize = 25;
         labelPassword.fontWeight = 'bold';

        //	SpAlabelPasswordlor and thickness
        labelPassword.stroke = '#000000';
        labelPassword.strokeThickness = 6;
        labelPassword.fill = 'purple';

        passwordBox = game.add.button(labelPassword.x + labelPassword.width + 14, labelPassword.y, 'textbox', this.fillPassword, this, 2, 1, 0);
        passwordBox.width += 75;

        signIn = game.add.button(game.world.centerX, game.world.height - 50, 'signInBtn', this.signIn, this, 2, 1, 0);
        signIn.anchor.setTo(0.5,0.5);
        signIn.width = 100;
        signIn.height = 50;

        backBtn = game.add.button(100, signIn.y, 'backBtn', () => {game.state.start('startMenu')}, this, 2, 1, 0);
        backBtn.anchor.setTo(0.5,0.5);
        backBtn.width = 60;
        backBtn.height = 60;

        

    
        


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
    },
    fillUserName: function(){
        username = prompt("Enter your username");

        userNameBox = game.add.button(labelUsername.x + labelUsername.width + 10, labelUsername.y, 'textbox', this.fillUserName, this, 2, 1, 0);
        userNameBox.width += 75;
        userNameText = game.add.text(userNameBox.x + 10, userNameBox.y + userNameBox.height /2, `${username}`);
        //userNameText.anchor.setTo(0.5,0.5);

        //	Font style
        userNameText.font = 'Arial Black';
        userNameText.fontSize = 14;
        //userNameText.fontWeight = 'bold';

        //	Stroke color and thickness
        userNameText.stroke = '#fff';
        //title.strokeThickness = 6;
        userNameText.fill = '#fff';
        //alert("Ayoo");
    },
    fillPassword: function(){
        password = '';
        password = prompt("Enter your password");
        let hashWords = '';
        for(let i = 0; i < password.length; i++){
            hashWords += '*';
        }

        passwordBox = game.add.button(labelPassword.x + labelPassword.width + 14, labelPassword.y, 'textbox', this.fillPassword, this, 2, 1, 0);
        passwordBox.width += 75;
        passwordText = game.add.text(passwordBox.x + 10, passwordBox.y + passwordBox.height /2, `${hashWords}`);
        //userNameText.anchor.setTo(0.5,0.5);

        //	Font style
        passwordText.font = 'Arial Black';
        passwordText.fontSize = 14;
        //userNameText.fontWeight = 'bold';

        //	Stroke color and thickness
        passwordText.stroke = '#fff';
        //title.strokeThickness = 6;
        passwordText.fill = '#fff';
        //alert('yo');
    },
    ////NOT READY TO COMPARE IF USERNAME PASSWORD MATCHES.
    signIn: async function(){
        //alert("aYOOOOO!")
        const url = 'http://localhost:2000/signin'
        const data = {
            username: username,
            password: password
        }
        try{
        await fetch(url, {
            method: 'post',
            body: JSON.stringify(data),
            headers: data ? {'Content-type': 'application/json'}: {}
        }
        ).then(response => {
            console.log(response);
            //alert(response);
            if(response.status==404)
                alert("Cannot Find That Person!")
            if(response.status == 200){
                alert("You are logged in")
                isLoggedIn = true;
                globalName = username;
                game.state.start('open');
            }
        });
        }catch(err){
            console.log(err);
            alert("Error Logging In")
        }
        

    }

};

function fillField(whichField){
    alert("Ayoooo");
}

