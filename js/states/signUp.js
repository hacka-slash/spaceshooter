//alert("hello");
var startButton, starfield, startText, startStyle, text, aboutButton, title, labelUsername, labelPassword, labelConfirmPassword, userNameBox, passwordBox, confirmPasswordBox, signUpBtn, username, password, confirmPassword, userNameText, passwordText, confirmPasswordText, backBtn;

var signUp = {
    init: function () {

    },
    
    preload: function(){
        game.load.image('plybtn', 'assets/mybuttons/playnow.png', 193, 71);
        game.load.image('abtbtn', 'assets/mybuttons/about.png', 193, 71);
        game.load.image('highscrbtn', 'assets/mybuttons/highscore.png', 193, 71);
        game.load.image('starfield', 'assets/starfield.jpg');
        game.load.image('title', 'assets/mytext/logo.png');
        game.load.image('textbox', 'assets/blackbox.png')
        game.load.image('signInBtn', 'assets/mybuttons/signup.png', 90, 35);
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

        // title = game.add.text(game.world.centerX, game.world.centerY - 100, 'Sign-Up');
        // title.anchor.setTo(0.5,0.5);

        // //	Font style
        // title.font = 'Arial Black';
        // title.fontSize = 50;
        // title.fontWeight = 'bold';

        //	Stroke color and thickness
        // title.stroke = '#000000';
        // title.strokeThickness = 6;
        // title.fill = 'purple';

        //USERNAME:
        labelUsername = game.add.text(20, 100, 'Username:');
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


        //PASSWORD:
        labelPassword = game.add.text(20, labelUsername.y + 100, 'Password:');
        labelPassword.font = 'Arial Black';
        labelPassword.fontSize = 25;
         labelPassword.fontWeight = 'bold';

        //	SpAlabelPasswordlor and thickness
        labelPassword.stroke = '#000000';
        labelPassword.strokeThickness = 6;
        labelPassword.fill = 'purple';

        passwordBox = game.add.button(labelPassword.x + labelPassword.width + 14, labelPassword.y, 'textbox', this.fillPassword, this, 2, 1, 0);
        passwordBox.width += 75;


        //CONFIRM PASSWORD:
        labelConfirmPassword = game.add.text(20, labelPassword.y + 100, 'Password:');
        labelConfirmPassword.font = 'Arial Black';
        labelConfirmPassword.fontSize = 25;
         labelConfirmPassword.fontWeight = 'bold';

        //	SpAlabelPasswordlor and thickness
        labelConfirmPassword.stroke = '#000000';
        labelConfirmPassword.strokeThickness = 6;
        labelConfirmPassword.fill = 'purple';

        confirmPasswordBox = game.add.button(labelConfirmPassword.x + labelConfirmPassword.width + 14, labelConfirmPassword.y, 'textbox', this.fillConfirmPassword, this, 2, 1, 0);
        confirmPasswordBox.width += 75;

        signUpBtn = game.add.button(game.world.centerX, game.world.height - 125, 'signInBtn', this.signUp, this, 2, 1, 0);
        signUpBtn.anchor.setTo(0.5,0.5);
        signUpBtn.width = 100;
        signUpBtn.height = 50;

        backBtn = game.add.button(100, signUpBtn.y, 'backBtn', () => {game.state.start('startMenu')}, this, 2, 1, 0);
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
        username = prompt("Enter your username").replace(/\s/g, "");

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
        password = prompt("Enter your password").replace(/\s/g, "");;
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
    fillConfirmPassword: function(){
        confirmPassword = '';
        confirmPassword = prompt("Enter your password").replace(/\s/g, "");;
        let hashWords = '';
        for(let i = 0; i < confirmPassword.length; i++){
            hashWords += '*';
        }

        confirmPasswordBox = game.add.button(labelConfirmPassword.x + labelConfirmPassword.width + 14, labelConfirmPassword.y, 'textbox', this.fillConfirmPassword, this, 2, 1, 0);
        confirmPasswordBox.width += 75;
        confirmPasswordText = game.add.text(confirmPasswordBox.x + 10, confirmPasswordBox.y + confirmPasswordBox.height /2, `${hashWords}`);
        //userNameText.anchor.setTo(0.5,0.5);

        //	Font style
        confirmPasswordText.font = 'Arial Black';
        confirmPasswordText.fontSize = 14;
        //userNameText.fontWeight = 'bold';

        //	Stroke color and thickness
        confirmPasswordText.stroke = '#fff';
        //title.strokeThickness = 6;
        confirmPasswordText.fill = '#fff';
    },
    ////NOT READY TO COMPARE IF USERNAME PASSWORD MATCHES.
    signUp: async function(){
        //alert("aYOOOOO!")
        //alert("Yooo");

        if(username.length < 5){
            return alert("Username must be at least 5 characters");
        }
        if(password !== confirmPassword){
            return alert("Your password does not match")
        }

        const url = 'http://localhost:2000/signup'
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
            console.log(response.text());
            alert("Success. Proceed to login.")
            game.state.start('signIn');
        });
        }catch(err){
            console.log(err);
            alert("That username is already in use")
        }
        
        //alert('Yoooo');

    }

};

function fillField(whichField){
    alert("Ayoooo");
}

