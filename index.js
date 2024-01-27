let numGameTotal = 5;
let playBtn = document.querySelector('button#play');
let playArea = document.querySelector('div#play-area')

playBtn.addEventListener('click', game); 

/* Play a best-of-five game that keeps score and return the winner at the end */
function game() {
    playBtn.style.display = 'none';
    playArea.style.display = 'block';

    let rockBtn = document.querySelector('input#rock');
    let paperBtn = document.querySelector('input#paper');
    let scissorsBtn = document.querySelector('input#scissors');
    
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = '';

    function getUserSelection() {
        return new Promise((resolve) => {
            rockBtn.addEventListener('click', function() {
                playerSelection = 'rock';
                resolve();
            });
            paperBtn.addEventListener('click', function() {
                playerSelection = 'paper';
                resolve();
            });
            scissorsBtn.addEventListener('click', function() {
                playerSelection = 'scissors';
                resolve();
            });
            
        });
    }
    async function playGame() {
        for (let i = 0; i < numGameTotal; i++) {
            await getUserSelection();
            console.log('getUserSelection completed: ',playerSelection);
            // playerSelection should now be set
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);
            while (result === "TIES") {
                alert("Ties! Let's try again. What is your choice?");
                await getUserSelection();
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


        let endgameResult = (playerScore > computerScore) ? "Player won!" : "Computer won.";
        console.log(endgameResult);
    }

    playGame();
}

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



// TODO: possibly group log messages for better organization