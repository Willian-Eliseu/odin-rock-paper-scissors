const choices = ['rock', 'paper', 'scissors'];
var humanScore = 0, computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = Math.random() * 10;
    if (randomNumber <= 3.33) {
        return choices[0];
    } else if (randomNumber > 3.33 && randomNumber <= 6.66) {
        return choices[1];
    } else {
        return choices[2];
    }
}

const getHumanChoice = () => {
    const humanChoice = prompt('Insert r for "rock", p for "paper" and s for "scissors"');
    
    if (humanChoice.toLocaleLowerCase() == "r") {
        return choices[0];
    } else if (humanChoice.toLocaleLowerCase() == "p") {
        return choices[1];
    } else if (humanChoice.toLocaleLowerCase() == "s") {
        return choices[2];
    } else {
        return 0;
    }
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice == computerChoice) {
        console.log("Draw");
    } else {
        console.log("You Lose " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

const playGame = () => {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log('Congratulations: You win! Score: '+humanScore+' x '+computerScore);
    }else if (humanScore == computerScore){
        console.log('The match is over. It\'s a draw!');
    }else{
        console.log('You lose!');
    }

}

addEventListener('DOMContentLoaded', function () {
    playGame();
});