let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

let choice = ['rock', 'paper', 'scissors']

function cpu(){
    return choice[Math.floor(Math.random()*choice.length)];
};

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

rock.addEventListener('click', () => {game('rock')});
paper.addEventListener('click', () => {game('paper')});
scissors.addEventListener('click', () => {game('scissors')});

let userScore = document.querySelector('.player-score');
let cpuScore = document.querySelector('.computer-score');
let round = document.querySelector('.round-result');
let winner = document.querySelector('.game-winner');

function playRound(ply, comp) {
    roundsPlayed++
    if ((ply == 'rock' && comp == 'scissors') ||
        (ply == 'paper' && comp == 'rock') ||
        (ply == 'scissors' && comp == 'paper')) {
            playerScore++;
            userScore.textContent = `${playerScore}`;
            round.textContent = `${ply} beats ${comp}`;
            return
                }else if (ply == comp) {
                    round.textContent = `${ply} & ${comp}`;
                    return 
                }computerScore++;
                cpuScore.textContent = `${computerScore}`;
                round.textContent = `${ply} loses to ${comp}`;
                    return 
};


function game(input) {
    
    let player = input;
    let computer = cpu();
        showCpu(computer);
        playRound(player, computer);
            if (playerScore == 5) {
                winner.innerHTML = 'You won!';
                endGame();
                return 
                    }else if (computerScore == 5) {
                        winner.innerHTML = 'Computer won!';
                        endGame();
                        return 
                    }
    
};

function endGame() {
    rock.setAttribute('disabled', 1);
    paper.setAttribute('disabled', 1);
    scissors.setAttribute('disabled', 1);
        let btn = document.createElement('button');
        btn.innerHTML = 'Play again';
        document.querySelector('.prompt').appendChild(btn);
        btn.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            userScore.textContent = `${playerScore}`;
            cpuScore.textContent = `${computerScore}`;
            round.textContent = `May the best take all the splendor`;
            winner.textContent = '';
                rock.removeAttribute('disabled');
                paper.removeAttribute('disabled');
                scissors.removeAttribute('disabled');
                document.querySelector('.prompt').removeChild(btn);
        });
}

let cpur = document.getElementById('cpur');
let cpup = document.getElementById('cpup');
let cpus = document.getElementById('cpus');


function showCpu(param) {
    let highlight = param;
    if (highlight == 'rock') {
        cpur.classList.remove('cpu-selection');
        void cpur.offsetWidth;
        cpur.classList.add('cpu-selection');
            }else if (highlight == 'paper') {
                cpup.classList.remove('cpu-selection');
                void cpup.offsetWidth;
                cpup.classList.add('cpu-selection');
                }else if (highlight == 'scissors') {
                    cpus.classList.remove('cpu-selection');
                    void cpus.offsetWidth;
                    cpus.classList.add('cpu-selection');
                }
        
};
//Toggle on/off each round???