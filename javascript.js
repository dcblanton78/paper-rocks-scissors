let playerSelection_temp = prompt("Please enter your play");
console.log(playerSelection_temp)
let playerSelection = playerSelection_temp.toUpperCase();
console.log(playerSelection)
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

function getComputerChoice(num) {
    let choice = Math.floor(Math.random() * num);
    if (choice == 1)
        return "PAPER"
    else if (choice == 2)
        return "ROCK"
    else return "SCISSORS"
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You win because ROCK always beats SCISSORS")
    }   
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You lose because ROCK always beats SCISSORS")
    }
    if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You win because SCISSORS always beats paper")
    }   
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You lose because SCISSORS always beats PAPER")
    }
    if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You win because paper always beats ROCK")
    }   
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You lose because paper always beats ROCK")
    }
    else if (playerSelection == computerSelection) {
        console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
        console.log("TIE!")
      }
  }
   
  

  


