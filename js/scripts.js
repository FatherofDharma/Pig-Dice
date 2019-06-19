function Game() {
  this.players = [],
  this.currentPlayer = 0;
  this.id = 0;
}




function Player(name) {
  this.name = name,
  this.score = 0,
  this.unbankedScore = 0,
  this.playerId = currentGame.id,
  currentGame.id += 1;
}


//this function was brought to you in part by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber() {
  //returns a random number between 1 and 7 including 1 but not 7
  return parseInt(Math.random() * (7 - 1) + 1);
}
//this adds the random number to the unbanked score of the current player or resets unbanked score if its a 1
Player.prototype.rollDie = function () {
  var num = getRandomNumber();
  if (num !== 1) {
    currentGame.players[currentGame.currentPlayer].unbankedScore += num;
    console.log('yay! rolled a ' + num);
  } else {
    currentGame.players[currentGame.currentPlayer].unbankedScore = 0;
    currentGame.players[currentGame.currentPlayer].passDie();
    console.log('crap! rolled a ' + num)
  }
  console.log(this.unbankedScore + "this sucks")
}

// //rolls the die
// Player.prototype.rollDie = function() {
//   this.calculateScore();
//   console.log(this.unbankedScore);
// }

//makes it the other player's turn
Player.prototype.passDie = function() {
  var x = this.playerId;
  console.log("player" + (x + 1) + "'s turn just ended.");
  this.score += this.unbankedScore;
  //if the id + 1 is equivalent to the length of the array then we are at the end of the array and need to go to the beginning
  this.unbankedScore = 0;
  if (this.score >= 20) {
    console.log(this.name + " WINS all the FISH!")
  } if (x + 1 === currentGame.players.length) {
    currentGame.currentPlayer = 0;
  } else {
    currentGame.currentPlayer = this.playerId + 1;
  }
}


var currentGame = new Game();
var player1 = new Player("Sam");
var player2 = new Player("Dan");

currentGame.players.push(player1);
currentGame.players.push(player2);
