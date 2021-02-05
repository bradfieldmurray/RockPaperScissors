//equates the string value to a number to be used to determine winner
function equateVal(val) {
    if(val == "Rock") {
      return 1;
    } else if(val == "Paper") {
      return 2;
    } else {
      return 3;
    }
}

//plays a round given each choice equated to a numeric value via equateVal func
function playRound(pl, comp){  
  if(equateVal(comp) == equateVal(pl)) {
    return "Tie";
  } else if((equateVal(comp) - equateVal(pl)) == 1 || (equateVal(comp) - equateVal(pl)) == -2)  {
    return "You lose! " + comp + " beats " + pl;
  } else {
    return "You win! " + pl + " beats " + comp;
  }
}

//generate a random choice for the computer
function computerPlay() {
  let numericSelection = Math.floor(Math.random() * (3-1 + 1) + 1);
  switch(numericSelection) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

//func to play a game of 5 rounds and display the score at the end
function game(){
  let computerSelection;
  let plScore = 0;
  let cpScore = 0;

  for(let i = 0; i < 5; i++){
    computerSelection = computerPlay();

    let plChoice = prompt("Enter a choice: ");

    if(playRound(plChoice, computerSelection) == 'Tie!') {

    } else if(playRound(plChoice, computerSelection)[4] == 'l') {
      cpScore++;
    } else if(playRound(plChoice, computerSelection)[4] == 'w') {
      plScore++;
    }
  }

  console.log("---------------------");
  console.log("------------\nScore : " + plScore + " - " + cpScore);
  
}

game();