function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            return "computer wins, paper covers rock";
        } else if(computerSelection === "scissors") {
            return "player wins, rock crushes scissors"
        } else {
            return "Tie";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "scissors") {
            return "computer wins, scissors cuts paper";
        } else if(computerSelection === "rock") {
            return "player wins, paper covers rock";
        } else {
            return "Tie";
        }
    } else {
        if(computerSelection === "rock") {
            return "computer wins, rock crushes scissors";
        } else if(computerSelection === "paper") {
            return "player wins, scissors cuts paper";
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




function game (){
    for(let i = 0; i < 5; i++) {
        let playerHand = prompt("enter: ");
        const computerSelection = computerPlay();
        console.log(playRound(playerHand, computerSelection));
    }
}

game();

