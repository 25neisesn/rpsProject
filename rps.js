
// Rock Paper Scissors Game
// Pseudocode for rock paper scissors 

// 1. Create a function to get computers choice 
// 2. Create a function to get users choice
// 3. Create a function to determine a winner of single round 
//          - display result of game
// 4. Create a loop to play until a player reaches 5 wins 
//         - keep track of scores announce overall winner

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = (Math.random() * choices.length) | 0;
    return choices[randomIndex];
}

function getUserChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Try again: rock, paper, or scissors?").toLowerCase();
    }

    return choice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return `It's a tie! You both chose ${playerChoice}.`;
    }

    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            return "You win! Rock beats scissors.";
        } else {
            return "You lose! Paper beats rock.";
        }
    }

    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return "You win! Paper beats rock.";
        } else {
            return "You lose! Scissors beat paper.";
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You win! Scissors beat paper.";
        } else {
            return "You lose! Rock beats scissors.";
        }
    }
}

function playGame() {
    
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);

        if (result.indexOf("You win") !== -1) {
            playerScore++;
        } else if (result.indexOf("You lose") !== -1) {
            computerScore++;
        }

        console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`);
    }

    if (playerScore === 5) {
        console.log("Congrats! You won the game!");
    } else {
        console.log("Better luck next time. The computer wins!");
    }
}

playGame();
