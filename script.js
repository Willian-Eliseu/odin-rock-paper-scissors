const choices = ['rock', 'paper', 'scissors'];
var humanScore = 0, cpuScore = 0;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const startGameButton = document.querySelector('#startGameButton');
const restartGameButton = document.querySelector('#restartGameButton');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const rounds = document.querySelector('#rounds');
const playerChoices = [];
const computerChoices = [];
var round = 1;
var gameDescription = '';

rockButton.addEventListener('click', function(){
    playerChoices.push('rock');
    computerChoices.push(getComputerChoice());
    playRound(playerChoices[playerChoices.length - 1], computerChoices[computerChoices.length - 1]);
});

paperButton.addEventListener('click', function(){
    playerChoices.push('paper');
    computerChoices.push(getComputerChoice());
    playRound(playerChoices[playerChoices.length - 1], computerChoices[computerChoices.length - 1]);
});

scissorsButton.addEventListener('click', function(){
    playerChoices.push('scissors');
    computerChoices.push(getComputerChoice());
    playRound(playerChoices[playerChoices.length - 1], computerChoices[computerChoices.length - 1]);
});

startGameButton.addEventListener('click', function(){
    startGameButton.classList.add('disabled');
    startGameButton.disabled = true;
    playGame();
})

restartGameButton.addEventListener('click', function(){
    rockButton.classList.add('disabled');
    paperButton.classList.add('disabled');
    scissorsButton.classList.add('disabled');
    startGameButton.classList.remove('disabled');
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    startGameButton.disabled = false;
    rounds.innerHTML = '';
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    gameDescription = '';
    round = 1;
    humanScore = 0;
    cpuScore = 0;
})

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

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice == "paper" && computerChoice == "rock") {
        gameDescription += `<p>Round ${round} - You Win! Paper beats Rock</p>`;               
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        gameDescription += `<p>Round ${round} - You Win! Rock beats Scissors</p>`;        
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        gameDescription += `<p>Round ${round} - You Win! Scissors beats Paper</p>`;
        humanScore++;
    } else if (humanChoice == computerChoice) {
        gameDescription += `<p>Round ${round} - Draw</p>`;
    } else {
        gameDescription += `<p>Round ${round} - You Lose! ${computerChoice} beats ${humanChoice}</p>`;
        cpuScore++;
    }
    round++;
    refreshScore();
    rounds.innerHTML = gameDescription;
}

const refreshScore = () => {
    rockButton.classList.add('disabled');
    paperButton.classList.add('disabled');
    scissorsButton.classList.add('disabled');
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    if(round === 6){
        //end
        if(humanScore > cpuScore){
            gameDescription += "<p>You Win!</p>";
        } else if(humanScore < cpuScore){
            gameDescription += "<p>You Lose!</p>";
        } else {
            gameDescription += "<p>Draw!"
        }
        rounds.innerHTML = gameDescription;
    }else if(round < 6){
        rockButton.classList.remove('disabled');
        paperButton.classList.remove('disabled');
        scissorsButton.classList.remove('disabled');
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
    }

    playerScore.innerHTML = humanScore;
    computerScore.innerHTML = cpuScore;
}

const playGame = () => {
    gameDescription += `<p>Round ${round} - Make your choice:</p>`;
    
    rounds.innerHTML = gameDescription;

    rockButton.classList.remove('disabled');
    paperButton.classList.remove('disabled');
    scissorsButton.classList.remove('disabled');

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}