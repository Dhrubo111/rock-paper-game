let count = 0 
let youWon = 0 
let computerWon = 0 
function increment() {
  count++;
}

function reNew(){
  count = 0 
  youWon = 0 
  computerWon = 0 
} 

function winCalc(who){
  if(who=="You win"){
    youWon++;
  }else if (who=="Draw"){
    computerWon = computerWon + 0.5 ;
    youWon = youWon + 0.5
  }else{
    computerWon++; 
  }
}
// Function to show and play the GIF and hide it after 10 seconds
function playGif() {
  // Get the image element
  const gif = document.getElementById("mega-fight");

  // Show the GIF
  gif.style.display = "block"; // or "block" or any suitable display value

  // Hide the GIF after 10 seconds
  setTimeout(() => {
    gif.style.display = "none";
  }, 3000); // 10,000 milliseconds = 10 seconds
}

// Function to show and play the GIF and hide it after 10 seconds
function playGifNext() {
  // Get the image element
  const gif = document.getElementById("next-fight");

  // Show the GIF
  gif.style.display = "block"; // or "block" or any suitable display value

  // Hide the GIF after 10 seconds
  setTimeout(() => {
    gif.style.display = "none";
  }, 2400); // 10,000 milliseconds = 10 seconds
}

// Function to show and play the GIF and hide it after 10 seconds
function ultaPlayGifNext() {
  // Get the image element
  const gif = document.getElementById("fight");

  // Show the GIF
  gif.style.display = "block"; // or "block" or any suitable display value

  // Hide the GIF after 10 seconds
  setTimeout(() => {
    gif.style.display = "none";
  }, 2000); // 10,000 milliseconds = 10 seconds
}





// Define an array with the words outside of the gameLogic function
let words = ["electron", "water", "hipno"];

// Move the gameLogic function definition here
let gameLogic = (choice) => {
  // Generate a random index
  let randomIndex = Math.floor(Math.random() * words.length);
  // Get the randomly chosen word
  let javascriptChoice = words[randomIndex];

  if (choice === javascriptChoice) {
    return [javascriptChoice, "Draw"];
  } else if (choice === "electron" && javascriptChoice === "water") {
    return [javascriptChoice, "You win"];
  } else if (choice === "electron" && javascriptChoice === "hipno") {
    return [javascriptChoice, "You lose"];
  } else if (choice === "water" && javascriptChoice === "electron") {
    return [javascriptChoice, "You lose"];
  } else if (choice === "water" && javascriptChoice === "hipno") {
    return [javascriptChoice, "You win"];
  } else if (choice === "hipno" && javascriptChoice === "electron") {
    return [javascriptChoice, "You win"];
  } else if (choice === "hipno" && javascriptChoice === "water") {
    return [javascriptChoice, "You lose"];
  }
};

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  let electron = document.getElementById("electron-button");
  let water = document.getElementById("water-button");
  let hipno = document.getElementById("hipno-button");
  let result = document.getElementById("final-result");
  let yourChoice = document.getElementById("your-choice");
  let computerChoice = document.getElementById("computer-choice");
  let fightingMassage = document.getElementById("massage")
  let reset = document.getElementById("reset-button");

  reset.addEventListener("click", function() {
    result.textContent = "Result is reset";
    yourChoice.textContent = "Your choice";
    computerChoice.textContent = "Computer's choice";
    fightingMassage.textContent = "Game has been reset";
    reNew();
    
  });

  electron.addEventListener("click", function() {
    let [compChoice, gameResult] = gameLogic("electron");
    winCalc(gameResult);
    result.textContent = gameResult;
    yourChoice.textContent = `[You:${youWon}] Your choice is electron`;
    computerChoice.textContent = `[computer:${computerWon}] Computer's choice is ${compChoice}`;
    increment()
    playGif()
    fightingMassage.textContent=`fighting done ${count} times`
  });

  water.addEventListener("click", function() {
    let [compChoice, gameResult] = gameLogic("water");
    winCalc(gameResult);
    result.textContent = gameResult;
    yourChoice.textContent = `[You:${youWon}] Your choice is water`;
    computerChoice.textContent = `[computer:${computerWon}] Computer's choice is ${compChoice}`;
    increment()
    playGifNext()
    fightingMassage.textContent=`fighting done ${count} times`
  });

  hipno.addEventListener("click", function() {
    let [compChoice, gameResult] = gameLogic("hipno");
    winCalc(gameResult);
    result.textContent = gameResult;
    yourChoice.textContent = `[You:${youWon}] Your choice is hipno`;
    computerChoice.textContent = `[computer:${computerWon}] Computer's choice is ${compChoice}`;
    increment()
    ultaPlayGifNext()
    fightingMassage.textContent=`fighting done ${count} times`
  });
});
