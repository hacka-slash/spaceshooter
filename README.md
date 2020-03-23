 ..*To deploy to Netlify, used command: git push -u origin --force master:netlify-deploy

 ..*!!** Must create logic to limit the amount of sprites on the screen at one time.. vicous, nasty and ugly lag

########## Fix-Respawn:

..I will have the user click where they want to respawn at and get a display message to do just that.

..Will create a bool called isWaitingToRespawn. This will be listening and while in update if the user clicks the screen and this bool is set to true it will respawn where clicked. This is set to true if player is indeed waiting to respawn. Will also give a countdown to do this via: setTimeOut(). This countdown will be displayed to the screen. 
 ..If the player does not click, the the old/original respawn logic will run, which may or may not lead directly into the line of fire from the enemy ships.
 ..If the player does click in time, a clearTimeOut() will execute and the player will respawn according to those coordinates.


 ######### Login-Logic:
 ..Must create a server.js file
 ..Ok, ran into a hiccup. Created my server.js via npm install express, and app.listen and my home route.
    ..The home route serves up the index file via res.sendFile(__dirname + "/index.html"). It serves the html but it cannot find the < script> tags needed to have the phaser code working..
    ..I need to find a way to implement require('phaser')(npm install phaser?), require('myState0.js') etc...  Must export these modules.
        ..Phaser3?

 ..Managed to get the server.js file to serve up all content including script tags and assets.. each one is its own route which returns res.sendFile(...).

 ..Discovered how to save to deliberate DB + Collection by altering the connection string slightly: ...cluster0-64jtu.mongodb.net/< Name of DB >retryWrites=true&w=majority';

 ..Following along with the login logic tutorial I got from the React-Tracker project. About to implement JWT.
        


 ######## Sprite-limit:
 ..Everytime a game object is added to the screen, the global sprite count will incriment. When the sprite leaves the screen it will 'destroy()' and the global count will decriment.

 ..before every sprite.add, we call: 'if(this.spriteCountCheck())' which returns a boolean if the sprite count is ok.

 ..SpriteCountCheck increments on every gameObjects.add() but we must decrement on everytime the Object is destroyed. Also check where they go off screen to be sure they are 'destroyed()' and the decrement happens. 

 ..Within the sprite's 'killThis()' The sprite.kill() or this.destroy() does not stop the sprite from updating and using up memory.. Perhaps an outside function that goes thru all gameObjects nd deletes them by changing them to null?


 ######## Fix-Player-Cannot-Go-Off-Screen:
  ..Within update.stickIsDown(), and checkInput we check the user.x if it is off screen and set the velocity to '0' if so and push the user.x away from the screen so that the velocity does not stay 0.




