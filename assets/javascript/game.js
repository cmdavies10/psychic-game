var winScore= 0;
var lossScore = 0;
var guessStart = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = [];

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guesses.push(userGuess);

    if (userGuess === computerGuess) {
        winScore++;
        guessStart = 10;
        guesses.length = 0;
    } else {
        guessStart--; 
    };

    if (guessStart === 0) {
        guessStart = 10;
        lossScore++;
        guesses.length = 0;
    } else {
    };
   
    document.getElementById("wins-text").innerHTML = "Wins: " + winScore;
    document.getElementById("losses-text").innerHTML = "Losses: " + lossScore;
    document.getElementById("guessesLeft-text").innerHTML = "Guesses Left: " + guessStart;
    document.getElementById("guesses-text").innerHTML = "Your Guesses Thus Far: " + guesses;
};