function playRound(playerSelection, computerSelection) {
    if(playerSelection == "Rock") {
        if(computerSelection === "paper") {
            return "Computer wins, paper covers rock";
        } else if(computerSelection === "scissors") {
            return "Player wins, rock smashes scissors"
        } else {
            return "Tie";
        }
    } else if(playerSelection == "Paper") {
        if(computerSelection === "scissors") {
            return "Computer wins, scissors cuts paper";
        } else if(computerSelection === "rock") {
            return "Player wins, paper covers rock";
        } else {
            return "Tie";
        }
    } else {
        if(computerSelection == "Rock") {
            return "Computer wins, rock smashes scissors";
        } else if(computerSelection === "paper") {
            return "Player wins, scissors cuts paper";
        } else {
            return "Tie";
        }
    }
}


function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    if(rand == 0) {
        return "rock";
    } else if(rand == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const buttons = document.querySelectorAll('button');
const controller = new AbortController();

let count = 0;
let playerScore = 0;
let compScore = 0;




buttons.forEach((button) => {
    button.addEventListener('click', () => {
    const result = document.createTextNode(playRound(button.id, computerPlay()));

    if(result.substringData(0,1) == "P") {
        playerScore++;
        document.getElementById('playerScore').textContent = `Player - ${playerScore}`;
    } else if(result.substringData(0,1) == "C") {
        compScore++;
        document.getElementById('compScore').textContent = `Computer - ${compScore}`;
    }

    const node = document.createElement('li');
    node.appendChild(result);
    document.getElementById('results').appendChild(node);
    count++;
    if(count == 5) {
        controller.abort();
        const gameResult = document.getElementById('gameResult');
        if(playerScore > compScore) {
            gameResult.textContent = `Player wins, ${playerScore} - ${compScore}`;
        } else if(compScore > playerScore) {
            gameResult.textContent = `Computer wins, ${compScore} - ${playerScore}`;
        } else {
            gameResult.textContent = `Tie game`;
        }
    }
    }, {signal: controller.signal});
});
