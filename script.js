const options = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
  }
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);  
}

playGame();