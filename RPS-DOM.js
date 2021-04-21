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
//intializes player and computer scores
let playerScore = 0;
let computerScore = 0;

function scoreUpdate() {
    document.getElementById('playerscore').innerHTML = `${playerScore}`;
    document.getElementById('computerscore').textContent = `${computerScore}`;
    return;
}

function winConditionCheck() {
    if (playerScore >= 5) {
        document.getElementById('textline').textContent = "Player wins, Congratulations!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore >= 5) {
        document.getElementById('textline').textContent = "Computer wins, better luck next time!";
        playerScore = 0;
        computerScore = 0;
    }
    return;
}

//plays a round of rock paper scissors and returns a winner
function playRound(playerSelection) {
    let result;
    let computerSelection = computerSelect();
    //checks for a tie first
    if(playerSelection === computerSelection) {
        document.getElementById("textline").textContent = "Tie!";
        scoreUpdate();
        return 0;
    }
    else if (playerSelection === "ROCK") {
        //compares playerSelection to its winning condition for computerChoice. 
        //If paper is chosen then rock wins and returns 1 for player victory, otherwise the player loses and it returns 2 for computer win
        result = (computerSelection === "SCISSORS") ? 1 : 2;
    }
    //repeates the process for the other choices
    else if (playerSelection === "PAPER") {
        result = (computerSelection === "ROCK") ? 1 : 2;
    }
    else {
        result = (computerSelection === "PAPER") ? 1 : 2;
    }

    //Notifies the player of the outcome and updates the score
    if (result == 1) {
        document.getElementById("textline").textContent = "Player wins!";
        playerScore++;
    }
    else if (result == 2) {
        document.getElementById("textline").textContent = "Computer wins!";
        computerScore++;
    }
    scoreUpdate();
    winConditionCheck();
    return;
}



//buttons call the play round function to begin each round
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playRound("ROCK");
});
paper.addEventListener('click', () => {
    playRound("PAPER");
});
scissors.addEventListener('click', () => {
    playRound("SCISSORS");
});