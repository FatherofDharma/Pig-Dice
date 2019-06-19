function Game() {
  this.players = []
}




function Player(name) {
  this.name = name,
  this.score = 0,
  this.unbankedScore = 0;
}


//this function was brought to you in part by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber() {
  //returns a random number between 1 and 7 including 1 but not 7
  return parseInt(Math.random() * (7 - 1) + 1);
}
//this adds the random number to the unbanked score of the current player or resets unbanked score if its a 1
Player.prototype.rollDie = function () {
  var num = getRandomNumber();
  console.log(num);
  if (num !== 1) {
    this.unbankedScore += num;
  } else {
    this.unbankedScore = 0;

  }
}

// //rolls the die
// Player.prototype.rollDie = function() {
//   this.calculateScore();
//   console.log(this.unbankedScore);
// }

//makes it the other player's turn
Game.prototype.passDie = function() {
  var x = $(indexOf(this.players));
  console.log(x);
  // if (x + 1 === this.players.length) {
  //   this.players.score = this.players[0];
  // } else {
  //   this.currentPlayer = this.players[x + 1];
  // }
}


var currentGame = new Game();
var player1 = new Player("Sam");
var player2 = new Player("Dan");

currentGame.players.push(player1);
currentGame.players.push(player2);
