// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 50;
    this.y = this.getEnemyRow();
    this.speed = this.getEnemySpeed();
    this.right = this.x + 30;
    //this.speed = ;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.bottom = this.y +30;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //console.log(this.x);
    this.x = ((this.x)+this.speed*dt);
    if (this.x > 400) {
        this.x = 0;
        this.speed = this.getEnemySpeed();
        this.y = this.getEnemyRow();
    }
};


Enemy.prototype.getEnemyRow = function() {
    var yCoord = [55, 145, 225];
    this.y = yCoord[Math.floor(Math.random()*3)];
    return this.y;
};


Enemy.prototype.getEnemySpeed = function() {
    var randomSpeed = Math.floor((Math.random()*100)+1);
    return randomSpeed;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

var Player = function() {
    this.sprite = 'images/char-princess-girl.png';
    this.x = 200;
    this.y = 375;
    this.right = this.x + 30;
    this.bottom = this.y + 30;
};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.collision = function(array){
    for (var i = 0; i < array.length; i++){
        if (this.x < array[i].x+60 && this.x+60 > array[i].x && this.y < array[i].y+40 && this.y+40 > array[i].y){
            this.x = 200;
            this.y = 375;
        }
        else{
            console.log("success");
        }
    }
};

Player.prototype.update = function(dt) {
    if (this.x > 450) {
        this.x = 400;
    }
    else if (this.x < 0) {
        this.x = 0;
    }
    else if (this.y > 430) {
        this.y = 375;
    }
    else if (this.y < 50) {
        this.y = 375;
        this.x = 200;
    }

};

Player.prototype.handleInput = function(key) {
   if (key === 'left') {
            this.x = this.x - 100; //this needs a limitation
    }
    else if (key === 'right') {
            this.x = this.x + 100; ///this needs a limitation
    }
    else if (key === 'up') {
            this.y = this.y - 80;
    }
    else  if (key === 'down') {
            this.y = this.y + 80;
    }
};

// Now instantiate your objects.
var player = new Player();
var enemy = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
// Place all enemy objects in an array called allEnemies

var allEnemies = [enemy, enemy2, enemy3, enemy4];
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
