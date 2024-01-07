console.log("Hello World");

/* Convert 0-2 to 'Rock, 'Paper', Scissors' */
function numToTool(number) {
    switch (number) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors'
    }
}

/* Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ */
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // returns a random integer from 0 to 2
    return numToTool(choice);
}
console.log(getComputerChoice());