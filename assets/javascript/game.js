
var wins = 0;
var losses = 0;
var guesses = 9;
var usedGuesses = 0;
var guessedLetter = [];

window.onload = getTheWord;

function getTheWord() {
    console.log("inside the function");
    var wordsArray = ["apple", "orange", "at", "down", "affix", "book", "cycle", "funny", "jelly", "lucky", "wave"];

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    console.log("The Word is: ", computerGuess);
    console.log("The word length is: ", computerGuess.length);
    var a = "";
    var letters="";
    for (var i = 0; i < computerGuess.length; i++) {
        a = a+"_";
        console.log(i);
    }
    document.getElementById("word").innerHTML = a;

    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;
        var indices =[];
        console.log("Key Pressed", userGuess);

        guessedLetter.push(userGuess);

        //Check whether userguessed letter is in the computer guessed word, if so take it's index
        for(var i = 0; i<computerGuess.length;i++){
            if(computerGuess[i]===userGuess){
                console.log("inside the if condition")
                indices.push(i);
            }
        }
        console.log(indices);

        //Display the matched letter in the guess word column
        for (var i=0; i<indices.length;i++){
            a = setCharAt(a,indices[i],userGuess);
            document.getElementById("word").innerHTML = a;
        }
        console.log(guessedLetter);
        document.getElementById("guessedLetters").innerHTML =guessedLetter ;
    }

}
//Function to insert the correctly guessed letters in the blank
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

