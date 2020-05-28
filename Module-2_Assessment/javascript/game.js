//Empty variable buckets
let randomQuote = [];
let lettersInName = [];
let dashes = 0;
let correctLetter = [];
let wrongLetter = [];

//Score tracker variables
let wins = 0;
let losses = 0;
let guessesRemaining = 6;

//modal
const modal = document.getElementById("modal");

//STARTING THE GAME
function startGame() {
  //computer generates random quote/name from array
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(quotes);
  console.log(randomQuote.name);

  // split the individual word into separate LETTERS, and store as array
  lettersInName = randomQuote.name.split("");
  console.log(lettersInName);
  dashes = lettersInName.length;
  console.log(dashes);
  for (var i = 0; i < dashes; i++) {
    correctLetter.push("_");
  }
  console.log(correctLetter);

  //showing the "_" within the HTML
  document.getElementById("quote").innerHTML = randomQuote.quote;
  document.getElementById("name").innerHTML = "  " + correctLetter.join("  ");
}

//STARTING THE GAME AGAIN: reset all values to previous values and call startGame()
function reset() {
  guessesRemaining = 6;
  wrongLetter = [];
  correctLetter = [];
  startGame();
}

//EVENTS: check for keypress && convert letter input to lowercase && store input in guesses
document.onkeypress = function (e) {
  const guesses = String.fromCharCode(e.keyCode).toLowerCase();
  //check to see if guess entered matches value of random word
  matchLetters(guesses);
  //process wins/loss
  endGame();
  //store player guesses in console for reference
  console.log(guesses);

  //display/store incorrect letters on screen
  document.getElementById("wrongLetters").innerHTML =
    "  " + wrongLetter.join(" ");
};

//MODAL VIEW
$(document).ready(function () {
  $("#hint").click(function () {
    $("#modal").modal();
  });
});

//COMPARE TO SEE IF PLAYER INPUT MATCHES RANDOMLY GENERATED NAME
function matchLetters(letter) {
  //if the input the player entered is equal to randomQuote.name- then condition is true
  let isLetterInName = false;
  for (let i = 0; i < dashes; i++) {
    if (randomQuote.name[i] === letter) {
      // console.log(letter);
      isLetterInName = true;
    }
  }
  //also, check to see if each letter the player enters matches the letters in randomQuote.name
  if (isLetterInName) {
    for (let i = 0; i < dashes; i++) {
      if (randomQuote.name[i] === letter) {
        correctLetter[i] = letter;
        // console.log(correctLetter);
      }
    }
  }
  //if the letters don't match, push the wrong letter into the wrong guesses section, and decrease number of guesses
  else {
    wrongLetter.push(letter);
    guessesRemaining--;
  }

  //display matching letters in "_" && show tracked number of guesses
  document.getElementById("name").innerHTML = correctLetter.join(" ");
  document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
}

//ENDING THE GAME
function endGame() {
  console.log(
    "wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining
  );
  //player wins
  //turn array into string
  if (lettersInName.toString() === correctLetter.toString()) {
    wins++;
    reset();
    //display wins on screen
    document.getElementById("wins").innerHTML = "wins: " + wins;

    //player loses
  } else if (guessesRemaining === 0) {
    losses++;
    reset();
    //display losses on screen
    document.getElementById("losses").innerHTML = "losses: " + losses;
  }
}

startGame();
