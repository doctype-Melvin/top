let choice = ['rock', 'paper', 'scissors',];

let player;
let playerScore = 0;
let computer;
let computerScore = 0;
let roundsPlayed;

let computerChoice = function() {
    return choice[Math.floor(Math.random()*choice.length)];
};
console.log(computerChoice());

const buttons = document.querySelectorAll('.button');
let playerChoice = buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        if (e.target.id == 'rock'){
            console.log(choice[0])
            return choice[0];
        }else if (e.target.id == 'paper'){
            console.log(choice[1])
            return choice[1];
        }else if (e.target.id == 'scissors'){
            console.log(choice[2])
            return choice[2];
        }
    }
)});


function playRound(player, computer) {
    player = playerChoice;
    computer = computerChoice;
    roundsPlayed++;
    if ((player == 'rock' && computer == 'scissors') ||
        (player == 'scissors' && computer == 'paper') ||
        (player == 'paper' && computer == 'rock')) {
            playerScore++;
        }else if (player == computer) {
            return
        } computerScore++
}

function game(){
    //Loop for 5 rounds
   do {
        playRound();
        console.log(playerScore);
        console.log(computerScore);
        console.log('ROUND');
    } while (roundsPlayed < 5);
    
    //Final score declaration
    if (playerScore > computerScore){
            return alert(`Player has won the game!
                            Final Score 
            Player: ${playerScore} vs Computer: ${computerScore}`)
        }else if (playerScore < computerScore){
                return alert(`Computer has won the game!
                                Final Score 
                Player: ${playerScore} vs Computer: ${computerScore}`)
                    }return alert(`Tied score! It's a draw!
                                    Final Score 
                    Player: ${playerScore} vs Computer: ${computerScore}`)
                }