// const question = document.querySelector("#quote");
const hiddenName = document.getElementById("#hiddenName");
const guessesRemaining = document.getElementById("#guessesRemaining");
const wrongLetters = document.getElementById("#wrongLetters");
const modal = document.getElementById("#modal");

// 1) create array of five name: quote

let quotes = [
  {
    name: "hagrid",
    quote: '"You\'re a wizard Harry"',
  },
  {
    name: "dumbledore",
    quote:
      '"Let us step into the night and pursue that flighty temptress, adventure."',
  },
  {
    name: "harry",
    quote: '"Time will not slow down when something unpleasent lies ahead."',
  },
  {
    name: "sirius",
    quote:
      '"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals."',
  },
  {
    name: "hermione",
    quote:
      '"Books! And cleverness! There are more important things!- Friendship! And Bravery!"',
  },
  {
    name: "ron",
    quote:
      '"Of all the trees we could’ve hit, we had to get one that hits back."',
  },
];

// 2) create function to pick key/value
function pickQuote() {
  const randomQuotePicked = quotes[Math.floor(Math.random() * quotes.length)];
  const { name, quote } = randomQuotePicked;
  //   console.log(name);
  //   console.log(quote);

  // seperate letters in name
  console.log("quote picked: ", quote);
  const hiddenLetters = name.split("");
  //   console.log(hiddenLetters);

  //display letters to be guessed with _ _ _
  for (let i = 0; i < hiddenLetters.length; i++) {
    hiddenLetters.splice(i, 1, "_");
    console.log("answer: ", name, hiddenLetters[i]);
  }
  //   for (let i = 0; i < hiddenLetters.length; i++) {
  //     hiddenLetters[i] = "_";
  //   }
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("hiddenName").innerHTML = hiddenLetters.join(" ");
}

pickQuote();

//EVENT LISTENERS==============================================================
//only allow valid guesses - lowercase letters only
//display only valid guesses on _ _ _

//GAME RULES====================================================================
//play starts with 6 lives
//decrease lives with every wrong letter guess
//display wrong guesses
//if same wrong letter is guessed again in one game, display "you have already guessed that letter"

//+++++++++++++++++++++++++++++++++++++++++++++++++
//player loses
//when no lives left display "Loser" in modal
//display button to play again
//play loser music or clip

//+++++++++++++++++++++++++++++++++++++++++++++++++++
//player winner
// modal of "Winner!"
// play winning clip of quote or music
//display button to play again
