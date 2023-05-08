let wins =  0;
let losses = 0;
let draws = 0;

let choices = ["rock", "paper", "scissor"];





startGame = () => {

    function computerPlay() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    let playerSelection = prompt("Rock, Paper or Scissor?");
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

   
    if (!userChoice) {
        return;
      }
}

startGame();

