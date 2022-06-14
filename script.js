function playRound(playerSelection, computerSelection) {
    if(playerSelection == "Rock") {
        if(computerSelection === "paper") {
            return "computer wins, paper covers rock";
        } else if(computerSelection === "scissors") {
            return "player wins, rock crushes scissors"
        } else {
            return "Tie";
        }
    } else if(playerSelection == "Paper") {
        if(computerSelection === "scissors") {
            return "computer wins, scissors cuts paper";
        } else if(computerSelection === "rock") {
            return "player wins, paper covers rock";
        } else {
            return "Tie";
        }
    } else {
        if(computerSelection == "Rock") {
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

let buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
let count = 0;




buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = document.createTextNode(playRound(button.id, computerPlay()));
        const node = document.createElement('li');
        node.appendChild(result);
        document.getElementById('scores').appendChild(node);
    });
});




// function game (){
//     for(let i = 0; i < 5; i++) {
//         let playerHand = prompt("enter: ");
//         const computerSelection = computerPlay();
//         console.log(playRound(playerHand, computerSelection));
//     }
// }

//game();

