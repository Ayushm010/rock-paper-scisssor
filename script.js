humanScore = 0;
computerScore = 0;


//gets the choice of the computer
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3); //returns 0 1 or 2
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissor";
}


//gets the choice from the user
function getHumanChoice() {
    choice = prompt("Rock,Paper,Scissor??");
    return choice;

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") console.log("Tie");
        else if (computerChoice === "paper") {
            console.log("You lost!!,Paper beats rock");
            computerScore++;
        }
        else if (computerChoice === "scissor"){
            console.log("You won!!,Rock beats scissor");
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "paper") console.log("Tie");
        else if (computerChoice === "scissor") {
            console.log("You lost!!,Scissor beats paper");
            computerScore++;
        }
        else if (computerChoice === "rock"){
            console.log("You won!!,Paper beats rock");
            humanScore++;
        }
    }
    else {//For scissor
        if (computerChoice === "scissor") console.log("Tie");
        else if (computerChoice === "rock") {
            console.log("You lost!!,Rock beats scissor");
            computerScore++;
        }
        else if (computerChoice === "paper"){
            console.log("You won!!,Scissor beats paper");
            humanScore++;
        }
    }
}

function playGame() {
    round = 1;
    while (round <= 5) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Your Score = ${humanScore} , Computer Score = ${computerScore} `);
        round++;
    }
}

playGame();

