//declare variables
var wins = 0;
var losses = 0;
var turns = 9;
var guess = "";

//create an array
var computerOption = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//create function for guessing the computer letter
document.onkeyup = function(event){

  var userGuess = event.key;

  var computerChoice = computerOption[Math.floor(Math.random() * computerOption.length)];

if (userGuess === computerChoice){
wins++;
turns = 9;
guess = "";
}

else if (userGuess != computerChoice) {
turns--;
guess = userGuess + ", ";
}

if (turns == 0) {
  loses++;
  turns = 9;
  guess = "";
}

var html = "<p>Guess what letter I'm thinking of</p>" +
  "<p>wins: " + wins + "</p>" +
  "<p>losses: " + losses + "</p>" +
  "<p>Guesses: " + turns + "</p>"+
  "<p>Your Guess So Far: " + guess + "</p>";

document.querySelector('#game').innerHTML = html;
}
