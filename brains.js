function getComputerChoice() {
    // Returns a random integer from 0 to 3:
    let greeting = Math.floor(Math.random() * 3);
    //Randomly parse Rock, Paper or Scissors
    switch(greeting) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        default:
            return "Scissors";
    }

}


function playRound(playerSelection, computerSelection){
    
    //obtain the player choice, case insensitive e.g. rock, Rock, ROCK, roCK
    playerSelection = prompt("Play Rock Paper Scissors by typing an option");
    let player = playerSelection.toLowerCase();
    
    //display message is displayed to the user 
        //If player and computer choice are the same, then show "It's a tie!"
        let outcomeTieMessage = "You got a tie.";
        let outcomeTie = (player == computerSelection.toLowerCase());

        //If player chooses Scissors and computer chooses Rock, player loses
        //If player chooses Rock and computer chooses Paper, player loses
        //If player chooses Paper and computer chooses Scissors, player loses
        let outcomeLoseMessage = "You lost.";
        let outcomeLose = (
            (player == "rock" && computerSelection == "Paper") || 
            (player == "paper" && computerSelection == "Scissors") || 
            (player == "scissors" && computerSelection == "Rock")
            );
        
        //If player chooses Scissors and computer chooses Paper, player wins
        //If player chooses Rock and computer chooses Scissors, player wins
        //If player chooses Paper and computer chooses Rock, player wins
        let outcomeWinMessage = "You won!";
        let outcomeWin = (
            (player == "rock" && computerSelection == "Scissors") || 
            (player == "paper" && computerSelection == "Rock") || 
            (player == "scissors" && computerSelection == "Paper")
            );

         //If player wins, then show "You Win! ${playerSelection} beats ${computerSelection}"
        if (outcomeWin) {
            return outcomeWinMessage;
        }

        //If player loses, then show "You Lose! ${computerSelection} beats ${playerSelection}"
        else if (outcomeLose) {
            return outcomeLoseMessage;
        }
        //If player and computer choice are the same, then show "It's a tie!"
        else if (outcomeTie) {
            return outcomeTieMessage;
        }
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
