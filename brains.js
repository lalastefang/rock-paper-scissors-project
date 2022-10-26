function getComputerChoice(RPS) {
    // Returns a random integer from 1 to 3:
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
    console.log(RPS);
}

getComputerChoice();
