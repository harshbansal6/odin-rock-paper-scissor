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
    const resultsDiv = document.querySelector("#result");
    const scoreDiv = document.querySelector('#score');
    const winnerDiv = document.querySelector('#winner');

    function updateScore() {
        scoreDiv.textContent = `Human: ${humanScore} | computer: ${computerScore}`; 
    }

    function checkWinner() {
        if (humanScore === 5) {
            winnerDiv.textContent = "Congratulations! You won the game!";
            disableButtons();
        } else if (computerScore === 5) {
            winnerDiv.textContent = "Sorry, you lost the game. Better luck next time!";
            disableButtons();
        }
    }
    function disableButtons() {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }

    function playRound(humanSelection, computerSelection) {
        let resultMessage = "";

        if (humanSelection === computerSelection) {
            resultMessage = "It's a draw! Go again.";
        } else if (
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper") ||
            (humanSelection === "rock" && computerSelection === "scissors")
        ) {
            resultMessage = `You win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        } else {
            resultMessage = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }

        resultsDiv.textContent = resultMessage;
        updateScore();
        checkWinner();
    }

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanSelection = button.textContent.toLowerCase();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        });
    });
    updateScore();

}

playGame()
