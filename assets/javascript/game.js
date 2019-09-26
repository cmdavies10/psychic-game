// set up baseline values
var winScore= 0;
var lossScore = 0;
var guessStart = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//=============================================
// set up functions
document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (userGuess === computerGuess) {
        winScore++;
        guessStart = 10
    } else {
        guessStart--;
    }

    if (guessStart === 0) {
        guessStart = 10;
        lossScore++;
    } else {
    }


    // display text 
    document.getElementById("wins-text").innerHTML = "Wins: " + winScore;
    document.getElementById("losses-text").innerHTML = "Losses: " + lossScore;
    document.getElementById("guessesLeft-text").innerHTML = "Guesses Left: " + guessStart;
    document.getElementById("guesses-text").innerHTML = "Your Guesses Thus Far: " + userGuess;
};