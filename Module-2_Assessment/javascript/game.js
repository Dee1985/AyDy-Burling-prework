//INSTANTIATING VARIABLES
const modal = document.querySelector("#modal");
const pickedQuote = document.querySelector("#quote");
const wrongLetters = document.querySelector("#wrongLetters");

let randomQuote = [];
let lettersInName = [];
let dashes = 0;
let correctLetter = [];
let wrongLetter = [];
let guessesRemaining = 6;
let wins = 0;
let losses = 0;

//STARTING THE GAME
function startGame() {
  const guessesRemaining = `<span> ${""}</span>`;
  //generate random quote:name from array
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(randomQuote.quote);
  console.log(randomQuote.name);
  const { quote, name } = randomQuote;

  // split the individual word into separate letters and store as array
  lettersInName = name.split("");
  // console.log(lettersInName);
  dashes = lettersInName;
  // console.log(dashes);
  dashes.forEach(function (hiddenLetter, index) {
    console.log(index, hiddenLetter);
    dashes = correctLetter.push("_");
    console.log(correctLetter);
  });

  //showing the "_" within the HTML
  pickedQuote.innerHTML = quote;
  document.querySelector("#name").innerHTML = correctLetter.join(" ");
}

//STARTING THE GAME AGAIN: reset all values to previous values and call startGame()

window.addEventListener("keydown", function (e) {
  const vanishConEl = document.getElementById("intro");
  const showEl = document.getElementById("gameContainer");
  vanishConEl.setAttribute("class", "container d-none");
  showEl.setAttribute("class", "container visible");
  document.onkeydown = function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const guesses = e.key;
      //check to see if guess entered matches value of random word
      matchLetters(guesses);
      //track wins and loss
      endGame();
    }
    document.getElementById("wrongLetters").innerHTML = `${wrongLetter.join(
      " "
    )}`;
  };
});

//modal
$(document).ready(function () {
  $("#hint").click(function () {
    $("#modal").modal();
  });
});

//RESETING THE GAME: clear scores and reset gusses
function reset() {
  guessesRemaining = 6;
  wrongLetter = [];
  correctLetter = [];
  startGame();
}

//COMPARE TO SEE IF PLAYER INPUT MATCHES RANDOMLY GENERATED NAME
function matchLetters(letter) {
  let isLetterInName = false;
  for (let i = 0; i < dashes; i++) {
    if (randomQuote.name[i].includes(letter)) {
      isLetterInName = true;
    }
  }
  //also, check to see if each letter the player enters matches the letters in randomQuote.name

  if (isLetterInName) {
    for (let i = 0; i < dashes; i++) {
      if (randomQuote.name[i] === letter) {
        correctLetter[i] = letter;
        audioData[0].goodSound.play();
        console.log("correct letter", letter);
      }
    }
  }
  //if the letters don't match, push the wrong letter into the wrong guesses section, and decrease number of guesses
  else {
    wrongLetter.push(letter);
    console.log("wrong letter", wrongLetter);
    guessesRemaining--;
    //play fail trumpet sound
    audioData[0].badSound.play();
    console.log(wrongLetter);
  }
  //display matching letters in "_" && show tracked number of guesses
  document.getElementById("name").innerHTML = correctLetter.join(" ");
  document.getElementById("guessesRemaining").innerHTML = `${guessesRemaining}`;
  //display/store incorrect letters on screen
  document.getElementById("wrongLetters").innerHTML =
    "  " + wrongLetter.join(" ");
}

//DECIDING WINS AND LOSSES && KEEPING TRACK OF SCORES AND NUMBER OF GUESSES
function endGame() {
  //If player wins:
  //turn array into string
  if (lettersInName.toString() === correctLetter.toString()) {
    wins++;
    console.log(`wins: ${wins}`);
    console.log(`losses: ${losses}`);
    //create time delay bwtween games- allows player to view screen longer
    setTimeout(() => {
      console.log("You Win!");
      //restart game
      reset();
    }, 600);
  }
  //display wins on screen
  document.getElementById("wins").innerText = `Wins: ${wins}`;

  //If player loses:
  if (guessesRemaining === 0) {
    losses++;
    console.log(`losses: ${losses}`);
    console.log(`wins: ${wins}`);
    //restart game
    reset();
  }
  //display losses on screen
  document.getElementById("losses").innerText = `Losses: ${losses}`;
  document.getElementById("guessesRemaining").innerText = `${guessesRemaining}`;
  console.log(`guesses left: ${guessesRemaining}`);
}

//INITIALIZE
startGame();
//----------------------------------------------------------------------------------------
