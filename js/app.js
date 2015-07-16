// Enemies our player must avoid
var columnValues = [101,202,303,404,505,606];

var Enemy = function() {
    var randIndex = Math.floor(Math.random()*3);
    console.log(randIndex);
    this.yPos = columnValues[randIndex];
    this.xPos = -101;
    this.speed = Math.random()*101+20;
    this.sprite = 'images/enemy-bug.png';
}

Enemy.prototype.update = function(dt) {
    this.xPos = this.xPos + this.speed*dt;
}

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}



var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.render = function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    this.yPos = 505;
    this.xPos = 166;
    this.update = function(posArr){
        this.x+=posArr[0];
        this.y+=posArr[1];
    }

    this.handleInput = function(allowedKeys){
        switch(allowedKeys)
            case 'left':

                break;
            case 'right':

                break;    
            case 'down':

                break;
            case 'up':
            
                break;
    }


}

Player.prototype.update = function(){

};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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


var player = new Player;
var allEnemies = [];






