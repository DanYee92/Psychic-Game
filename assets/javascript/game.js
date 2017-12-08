//declare variables
var wins = 0;
var losses = 0;
var turns = 9;
var guess = "";

//create an array
var computerOption = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//need to write syntax for recording what the user entered
//document is to write out which key was pressed
//onkeyup = is the even key when button is pressed
//function(event) writes the rule for what happens when key is pressed
document.onkeyup = function(event){


  //make var for userGuess
  //event.key is the syntax for registering the key identifiers when pressed.
  var userGuess = event.key;


  //make syntax for computer to pick a random letter from the array to choose which letter the user should guess
  //Math.floor to round the answer to the nearest whole integer but it is not needed in this case since there are only strings
  //Math.random() to choose a random object from the array
  //* to add what pool or options list to choose from
  //computerOption is the pool to choose from
  //.length counts the elements in the array and closes the array which closes the array
  var computerChoice = computerOption[Math.floor(Math.random() * computerOption.length)];


if (userGuess === computerChoice){
wins++;
turns = 9;
guess = "";
}

else if (userGuess != computerChoice) {
turns--;
guess += userGuess + ", ";
}

if (turns == 0) {
  losses++;
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
