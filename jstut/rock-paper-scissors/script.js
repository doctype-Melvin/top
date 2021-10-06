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
    playRound()        
}
    
    

let computerSelection = computerPlay().toLowerCase();
let playerSelection = 'Scissors'.toLowerCase();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))