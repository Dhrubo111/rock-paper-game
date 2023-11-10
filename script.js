



let count = 0 
let youWon = 0 
let computerWon = 0 
const gameLimit = 6
function isBattleWon(){
  if(youWon > computerWon){
    return true
    
  }else if (computerWon > youWon){
    return false
    
  }else{
    return 10
    
  }
  
}




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
  let bot = document.querySelectorAll(".bot")
  let electron = document.getElementById("electron-button");
  let water = document.getElementById("water-button");
  let hipno = document.getElementById("hipno-button");
  let result = document.getElementById("final-result");
  let yourChoice = document.getElementById("your-choice");
  let computerChoice = document.getElementById("computer-choice");
  let fightingMassage = document.getElementById("massage")
  let reset = document.getElementById("reset-button");


  function wrongClick(){
    fightingMassage.textContent = "only click Player cards not computer cards"

  }



  bot.forEach(
    btn => {
      btn.addEventListener(
        "click" , ()=>{
          wrongClick()
        }
      )
    }
  )




  function finlaResult(){
    result.textContent = "Result is reset";
    yourChoice.textContent = "Your choice";
    computerChoice.textContent = "Computer's choice";

  }

  function winingLogic(){
    if(count === gameLimit || count >= gameLimit){
      common = `[YOU :${youWon}] & [COMPUTER :${computerWon}]`
      if(isBattleWon() === true){
        
        fightingMassage.textContent = common + ` You won the whole battle :)`;
        reNew()
        finlaResult()
      }else if (isBattleWon() === false){
       
        fightingMassage.textContent = common +` Computer won the whole battle :(`;
        reNew()
        finlaResult()
      }else if (isBattleWon() === 10){
        fightingMassage.textContent = common+` its a Draw :]`;
        reNew()
        finlaResult()
      }
    }
  }

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
    winingLogic()

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
    winingLogic()
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
    winingLogic()
  });
});




