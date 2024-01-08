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
    let result;
    // console.log("Inside playRound: ", computerSelection, playerSelection);
    playerSelection = playerSelection.trim().toLowerCase();
    if (playerSelection === computerSelection) {
        return "TIES";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' 
            || playerSelection === 'scissors' && computerSelection === 'paper'
            || playerSelection === 'paper' && computerSelection === 'rock') {
        playerSelection = capitalizeFirstLetter(playerSelection);
        announcement = `You win! ${playerSelection} beats ${computerSelection}.`;
        result = true; // player wins
    } else {
        announcement = `You lose, ${computerSelection} beats ${playerSelection}.`;
        result = false; // computer wins
    }
    console.log(announcement);
    return result;
}

// TEST: playRound()
// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

/* Play a best-of-five game that keeps score and return the winner at the end */
function game() {
    // keep track of score: 1 for player, 1 for computer
    // play 5 round and determine the winner:
    // for loop 5 times, call playRound() 
    //      prompt user for selection
    //      while TIES, re-prompt the user and call playRound()
    //      else, a winner is determined so we increase the score
    // announce the winner after the for loop

    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors! What is your choice?", "rock");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        while (result === "TIES") {
            console.log("TIES");
            playerSelection = prompt("Ties! Let's try again. What is your choice?", "rock");
            computerSelection = getComputerChoice();
            result = playRound(playerSelection, computerSelection);
        }

        if (result) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        console.log(`End of round result: player has won ${playerScore} out of ${i + 1} rounds.`);
    } // end for
    let result = (playerScore > computerScore) ? "Player won!" : "Computer won.";
    console.log(result);
}

game();

// TODO: possibly group log messages for better organization