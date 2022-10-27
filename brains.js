function getComputerChoice(RPS) {
    // Returns a random integer from 0 to 3:
    let greeting = Math.floor(Math.random() * 3);
    //Randomly parse Rock, Paper or Scissors
    switch(greeting) {
        case 1:
            RPS = "Rock";
            break;
        case 2:
            RPS = "Paper";
            break;
        default:
            RPS = "Scissors";
    }
}
getComputerChoice();

function playRound(playerSelection, computerSelection){
    //obtain the player choice, case insensitive e.g. rock, Rock, ROCK, roCK
    let player = prompt("Play Rock Paper Scissors by typing an option");
    playerSelection === player.toUpperCase;
    computerSelection === getComputerChoice.toUpperCase;
    //display message is displayed to the user 
        //If player and computer choice are the same, then show "It's a tie!"
        if (playerSelection = computerSelection) {
            return player = "It's a tie!";
        }
        //If player loses, then show "You Lose! ${computerSelection} beats ${playerSelection}"
        //If player chooses Scissors and computer chooses Rock, player loses
        //If player chooses Rock and computer chooses Paper, player loses
        //If player chooses Paper and computer chooses Scissors, player loses
        else if ((playerSelection == "ROCK" && computerSelection == "PAPER")
            || (playerSelection == "SCISSORS" && computerSelection == "ROCK") 
            || (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
                return player = "You lost!";
        }
        //If player wins, then show "You Win! ${playerSelection} beats ${computerSelection}"
        //If player chooses Scissors and computer chooses Paper, player wins
        //If player chooses Rock and computer chooses Scissors, player wins
        //If player chooses Paper and computer chooses Rock, player wins
        else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS")
            || (playerSelection == "SCISSORS" && computerSelection == "PAPER")
            || (playerSelection == "PAPER" && computerSelection == "ROCK")){
                return player = "You won!";
            }
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
