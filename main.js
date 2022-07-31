
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    pos = Math.floor(Math.random() * choices.length);
    return choices[pos];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`Tie! Both selected ${playerSelection}!`);
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        playerScore += 1;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        computerScore += 1;
    }
}

function game(){
    // let playerScore = 0;
    // let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your choice?");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
     }
     console.log("Game Over!");
}

game()