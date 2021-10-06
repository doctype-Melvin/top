//The computer's choice function
function computerPlay() {
   let choice = ['Rock', 'Paper', 'Scissors'];
   return choice[Math.floor(Math.random() * choice.length)];
}

//The play round function
function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        return `Player wins! ${playerSelection} beats ${computerSelection}!`
    }else if (playerSelection == computerSelection) {
            return `Tied game! Both chose ${playerSelection}.`
        }       return `Computer wins! ${computerSelection} beats ${playerSelection}!`
}

//The game function

function game() {
    let playerScore = 0;
    let computerScore = 0;
    playRound()
            if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
                    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
                        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
                            playerScore+=1
                                
                }else if ((playerSelection == 'Scissors' && computerSelection == 'Rock') || 
                        (playerSelection == 'Rock' && computerSelection == 'Paper') ||
                            (playerSelection == 'Paper' && computerSelection == 'Scissors' )) {
                                computerScore+=1
                                    }
}
    
    

let computerSelection = computerPlay();
let playerSelection = 'Scissors';
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))
console.log(game(playRound()));
