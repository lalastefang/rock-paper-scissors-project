function getComputerChoice() {
    // Returns a random integer from 0 to 2:
    switch(Math.floor(Math.random() * 2)) {
        case 1:
            text = "Rock";
            break;
        case 2:
            text = "Paper";
            break;
        default:
            text = "Scissors";
    }
    console.log(text);
}
