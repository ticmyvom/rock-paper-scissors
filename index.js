/* Convert 0-2 to 'Rock, 'Paper', Scissors' */
function numToTool(number) {
    switch (number) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors'
    }
}

/* Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ */
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // returns a random integer from 0 to 2
    return numToTool(choice);
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function playRound(playerSelection, computerSelection) {
    let announcement;
    console.log("Inside playRound: ", computerSelection, playerSelection);
    playerSelection = playerSelection.trim().toLowerCase();
    if (playerSelection === computerSelection) {
        return "TIES";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' 
            || playerSelection === 'scissors' && computerSelection === 'paper'
            || playerSelection === 'paper' && computerSelection === 'rock') {
        playerSelection = capitalizeFirstLetter(playerSelection);
        announcement = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        announcement = `You lose, ${computerSelection} beats ${playerSelection}.`;
    }
    return announcement;
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));