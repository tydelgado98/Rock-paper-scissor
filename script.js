let wins =  0;
let losses = 0;
let draws = 0;

start = document.querySelector("#start");

let choices = ["r", "p", "s"];

play = () => {
    start = document.querySelector("#start");
    start.addEventListener("click", startGame);
}

startGame = () => {

    let playerSelection = prompt("r, p or s?");
    if (playerSelection === null) {
        return;
    }
        

     computerSelection = choices[Math.floor(Math.random() * choices.length)];
    

      alert(`computer chose ` + computerSelection);

    if (playerSelection === computerSelection) {
        draws++;
        alert("It's a draw!");
    }
     
    else if (
        (playerSelection === "r" && computerSelection === "s") ||
        (playerSelection === "p" && computerSelection === "r") ||
        (playerSelection === "s" && computerSelection === "p")
    ) {
        wins++;
        alert("You win!");
    }
    else {
        losses++;
        alert("You lose!");
    }
    alert(`wins: ${wins} \nlosses: ${losses} \ndraws: ${draws}`);
    confirm("Do you want to play again?");
    if (confirm) {
        startGame();
    }
}

play();
