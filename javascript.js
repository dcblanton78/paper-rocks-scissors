/*let playerSelection_temp = prompt("Please enter your play");
console.log(playerSelection_temp)
let playerSelection = playerSelection_temp.toUpperCase();
console.log(playerSelection)
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);*/

let playerScore = 0;
let computerScore =0;
console.log("We will be playing 5 games of paper-rock-scissors");
game();

  function game(){
    for (let i = 1; i < 6; i++){
        console.log("Beginning round " + i);
        let playerSelection_temp = prompt("Please enter your play");
        let playerSelection = playerSelection_temp.toUpperCase();
        const computerSelection = getComputerChoice(3);
        playRound(playerSelection, computerSelection);
        console.log("Player Score " + playerScore);
        console.log("Computer Score " + computerScore)
    }
    if (playerScore > computerScore)
        alert("You win!")
        else alert("You lose :(")
}
    
  

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
        playerScore ++;
    }   
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You lose because ROCK always beats SCISSORS");
        computerScore ++;
    }
    if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You win because SCISSORS always beats paper");
        playerScore ++;
    }   
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You lose because SCISSORS always beats PAPER");
        computerScore ++;
    }
    if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You win because paper always beats ROCK");
        playerScore ++;
    }   
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("User input:" + (playerSelection));
        console.log("Computer input: " + (computerSelection));
        console.log("You lose because paper always beats ROCK");
        computerScore ++;
    }
    else if (playerSelection == computerSelection) {
        console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
        console.log("TIE!")
      }
  }
   
  

  


