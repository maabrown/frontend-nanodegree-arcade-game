// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 50;
    this.y = 50;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

var Player = function() {
    this.sprite = 'images/char-princess-girl.png';
    this.x = 150;
    this.y = 200;
    //this.checkCollison() = function() {}; //reset the game when player and bug collide
};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt) {
    if (this.x > 500) {
        this.x = 50;
    }
    else if (this.x < 0) {
        this.x = 30;
    }
    else if (this.y > 430) {
        this.y = 420;
    }
    else if (this.y < 50) {
        this.y = 300;
        this.x = 100;
    }
};

Player.prototype.handleInput = function(key) {
   if (key === 'left') {
            this.x = this.x - 30; //this needs a limitation
    }
    else if (key === 'right') {
            this.x = this.x + 30; ///this needs a limitation
    }
    else if (key === 'up') {
            this.y = this.y - 30;
    }
    else  if (key === 'down') {
            this.y = this.y + 30;
    }
};

// Now instantiate your objects.
var player = new Player();
var enemy = new Enemy();
var enemy2 = new Enemy();
enemy2.x = 70;
enemy2.y = 45;
// Place all enemy objects in an array called allEnemies

var allEnemies = [enemy, enemy2];
// Place the player object in a variable called player

//need event listener for 'left' 'right' etc. you need to call that incremen or decrement player x and y value
// define another method called handledInput() listen to keyboard strokes and do the movements


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
