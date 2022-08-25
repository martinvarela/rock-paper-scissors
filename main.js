
let playerScore = 0;
let computerScore = 0;

const result_div = document.querySelector('.results');
const score_div = document.querySelector('.score');
const winner_div = document.querySelector('.winner');

function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    pos = Math.floor(Math.random() * choices.length);
    return choices[pos];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        result_div.innerHTML = `Tie! Both selected ${playerSelection}!`;
        //console.log(`Tie! Both selected ${playerSelection}!`);
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        playerScore += 1;
        result_div.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}!`;
        //console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        result_div.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        //console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        computerScore += 1;
    }
}

function selection_made(e) {
    let playerSelection = e.target.id
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    //console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    score_div.innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        winner_div.innerHTML = "PLAYER WINS!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        winner_div.innerHTML = "COMPUTER WINS!";
        playerScore = 0;
        computerScore = 0;
    } else {
        winner_div.innerHTML = "";
    }
  }

const selection_buttons = Array.from(document.querySelectorAll('.selection-button'));
selection_buttons.forEach(selection_button => selection_button.addEventListener('click', selection_made));
