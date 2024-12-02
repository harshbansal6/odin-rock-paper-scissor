function getComputerChoice() {
    let a = Math.floor((Math.random() * 3) + 1);
    if (a === 1) {
        return "rock"
    } else if (a === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let b = prompt("Rock, paper or scissors?").toLowerCase();
    return b;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
            console.log("It's draw! Go Again")
        } else if (humanSelection === "paper" && computerSelection === "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else if (humanScore === "scissors" && computerSelection == "rock") {
            console.log("You lose! Stone beats scissor")
            computerScore++;
        } else if (humanSelection === "scissors" && computerSelection === "paper") {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        } else if (humanSelection === "rock" && computerSelection === "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        } else if (humanScore === "paper" && computerSelection == "scissors") {
            console.log("You lose! Scissors beats paper")
            computerScore++;
        } else if (humanScore === "rock" && computerSelection == "paper") {
            console.log("You lose! Paper beats rock")
            computerScore++;
        }
        console.log(humanScore, computerScore);
    }

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

if (humanScore > computerScore) {
    console.log("YOU WON!!")
} else if (computerScore > humanScore) {
    console.log("YOU LOSE!!")
} else {
    console.log("WHAT. A. MATCH... IT'S A DRAW")
}

}

playGame()
