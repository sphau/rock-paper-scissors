
//prompt user for input for the game
function playerSelect() {

    //input is saved as a string then converted to upper case and then check to see if input is a valid match. If it isn't the prompt repeats until a valid match is given
    let playerChoice;
    do {
    playerChoice = window.prompt("Choose Rock, Paper, or Scissors");
    playerChoice = playerChoice.toUpperCase();
    } while(playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !=="SCISSORS")
    console.log("Player chooses " + playerChoice)
    return playerChoice
}

//defines a function that gets a random number for choosing the computer choice
const MAX = 3;
function getRandomInt() {
    return Math.floor(Math.random() * MAX);
}
//computer choose randomly on of the options using a random number gen and an array
function computerSelect() {
    let selections = ["ROCK", "PAPER", "SCISSORS"];
    let selectionInt = getRandomInt();
    let computerChoice = selections[selectionInt];
    console.log("Computer chooses " + computerChoice);
    return computerChoice;
}

//plays a round of rock paper scissors and returns a winner
function playRound(playerSelection, computerSelection) {
    let result;
    //checks for a tie first
    if(playerSelection === computerSelection) {
        return 0;
    }
    else if (playerSelection === "ROCK") {
        //compares playerSelection to its winning condition for computerChoice. 
        //If paper is chosen then rock wins and returns 1 for player victory, otherwise the player loses and it returns 2 for computer win
        result = (computerSelection === "SCISSORS") ? 1 : 2;
        return result;
    }
    //repeates the process for the other choices
    else if (playerSelection === "PAPER") {
        result = (computerSelection === "ROCK") ? 1 : 2;
        return result;
    }
    else {
        result = (computerSelection === "PAPER") ? 1 : 2;
        return result;
    }
}

//plays the game 5 times and returns the winner using the previous functions
function game() {
    let games = 5;
    let playerPoints = 0, computerPoints = 0;
    //loops the playRound function "game" nubmer of times
    for(let i = 1; i <= games; i++) {
        let playerSelction = playerSelect();
        let computerSelection = computerSelect();
        if (playRound(playerSelction, computerSelection) == 1) {
            playerPoints++;
            console.log("Player wins Round " + i);
        }
        else if (playRound(playerSelction, computerSelection) == 2) {
            computerPoints++;
            console.log("Computer wins Round " + i);
        }
        else {
            console.log("Round " + i + " is a Tie!")
        }
    }
    //prints the winner
    if (playerPoints > computerPoints) {
        console.log(`Yay you win with ${playerPoints} points!`)
        return 0;
    }
    else if (playerPoints < computerPoints) {
        console.log(`Oof the computer beat you with ${computerPoints} points`);
        return 0;
    }
    else {
        console.log("It's a tie game!")
        return 0;
    }
}