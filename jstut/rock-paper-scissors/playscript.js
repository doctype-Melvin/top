let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', () => {
    game('rock');
});
paper.addEventListener('click', () => {
    game('paper');
});
scissors.addEventListener('click', () => {
    game('scissors');
});

function computer() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random()*choice.length)] 
};

function playRound(ply, cpu) {
    if ((ply == 'rock' && cpu == 'scissors') ||
        (ply == 'paper' && cpu == 'rock') ||
        (ply == 'scissors' && cpu == 'paper')) {
            playerScore+=1
            return round.textContent = `${ply} vs ${cpu} You won this round`;
        }else if (ply == cpu) {
            return round.textContent = `${ply} vs ${cpu} It's a draw`;
        }computerScore+=1
            return round.textContent = `${ply} vs ${cpu} Computer won this round`;
};

function game(input) {
    let ply = input;
    let cpu = computer();
    
    playRound(ply, cpu);
    if (playerScore == 5) {
        const winner = document.querySelector('#winner');
        winner.textContent = `You've won the game!`;
        return winner;
    }else if (computerScore == 5) {
        const loser = document.querySelector('#winner');
        winner.textContent = `You've lost!`
        return loser;
    }
    player.textContent = `Player: ${playerScore}`;
    comp.textContent = `Computer: ${computerScore}`
};

const scores = document.querySelector('#scores');
        //scores.setAttribute('style', 'background: black; color: white');
const player = document.querySelector('#player');
        player.textContent = `Player: ${playerScore}`;
const comp = document.querySelector('#computer');
        comp.textContent = `Computer: ${computerScore}`
const round = document.querySelector('.round-result');