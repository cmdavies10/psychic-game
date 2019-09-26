var winScore= 0;
var lossScore = 0;
var guessStart = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = [];
    
document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (userGuess === computerGuess) {
        winScore++;
        guessStart = 10
    } else {
        guessStart--;
    };

    if (guessStart === 0) {
        guessStart = 10;
        lossScore++;
    } else {
    };

    // create an array for each "life" that stores each keystroke or guess within each life
    // lookup mozzila - array methods -- help to push items into array
    guesses.push(userGuess);
    console.log(guesses);


    // for loop that pushes user guess up to 10 into the guesses array
    // for (var i = 0; i < 10; i++) {
        // guesses.push(userGuess);
    // };
   
    document.getElementById("wins-text").innerHTML = "Wins: " + winScore;
    document.getElementById("losses-text").innerHTML = "Losses: " + lossScore;
    document.getElementById("guessesLeft-text").innerHTML = "Guesses Left: " + guessStart;
    document.getElementById("guesses-text").innerHTML = "Your Guesses Thus Far: " + guesses;
};