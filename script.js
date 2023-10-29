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
  }, 2000); // 10,000 milliseconds = 10 seconds
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
  let reset = document.getElementById("reset-button");

  reset.addEventListener("click", function() {
    result.textContent = "Result is reset";
    yourChoice.textContent = "Your choice";
    computerChoice.textContent = "Computer's choice";
    
  });

  electron.addEventListener("click", function() {
    let [compChoice, gameResult] = gameLogic("electron");
    result.textContent = gameResult;
    yourChoice.textContent = `Your choice is electron`;
    computerChoice.textContent = `Computer's choice is ${compChoice}`;
    playGif()
  });

  water.addEventListener("click", function() {
    let [compChoice, gameResult] = gameLogic("water");
    result.textContent = gameResult;
    yourChoice.textContent = `Your choice is water`;
    computerChoice.textContent = `Computer's choice is ${compChoice}`;
    playGifNext()
  });

  hipno.addEventListener("click", function() {
    let [compChoice, gameResult] = gameLogic("hipno");
    result.textContent = gameResult;
    yourChoice.textContent = `Your choice is hipno`;
    computerChoice.textContent = `Computer's choice is ${compChoice}`;
    ultaPlayGifNext()
  });
});
