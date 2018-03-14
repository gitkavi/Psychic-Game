
var wins = 0;
var losses = 0;
var guesses = 10;
var usedGuesses = 0;
var guessedLetter = [];

var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess = letter[Math.floor(Math.random() * letter.length)];

console.log("Computer Guessed letter: "+computerGuess);
document.getElementById("guessLeft").innerHTML = guesses;

document.onkeyup = function (event) {

    var key = event.keyCode;

    //Checks if the key pressed is an aplbhabet
    if ((key >= 65 && key <= 90)){
      
        // Determines which key was pressed.
        var userGuess = (event.key).toLowerCase();

        usedGuesses++;
        guesses--;

        document.getElementById("guessLeft").innerHTML = guesses;

        //pushes the guessed letter in to guessedLetter array.
        guessedLetter.push(userGuess);
        document.getElementById("guessedLetters").innerHTML = guessedLetter;

        //Checks if user has guessed the correct letter with the provided number of guess.
        if ((usedGuesses<=10) && (userGuess === computerGuess)){
            wins++;
            document.getElementById("winScore").innerHTML = wins;
            alert("You Win !!!");
            reset();
        }

        // Checks if user has used all the guessing options and still didn't find the letter
        if ((usedGuesses == 10) && (userGuess != computerGuess))
        {
            losses++;
            document.getElementById("loseScore").innerHTML = losses;
            alert("Computer Win !!!")
            reset();
        }
    }
    else{
        alert("Please press only alphabets!!");
    }
}
function reset(){
    usedGuesses = 0; // resets the number used guess
    guesses = 10; // resets the number of guesses left
    document.getElementById("guessLeft").innerHTML = guesses;
    computerGuess = letter[Math.floor(Math.random() * letter.length)]; // picks a new letter
    console.log("Computer Guessed letter: "+computerGuess);
    guessedLetter = []; //clears the guessed letter array
    document.getElementById("guessedLetters").innerHTML = guessedLetter; //displays the new cleared array
}