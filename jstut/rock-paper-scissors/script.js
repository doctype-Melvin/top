//The computer's choice function
let choice = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
   return choice[Math.floor(Math.random()*choice.length)];
}

//Automated player function
function playerPlay() {
    return choice[Math.floor(Math.random()*choice.length)];
}

//Scores
let compScore = 0
let playScore = 0

//The play round function
function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
            playScore++
        return `Player wins! ${playerSelection} beats ${computerSelection}!`
    }else if (playerSelection == computerSelection) {
            return `Tied game! Both chose ${playerSelection}.`
        }     compScore++
                return `Computer wins! ${computerSelection} beats ${playerSelection}!`
}



//The game function



  

let computerSelection = computerPlay();
let playerSelection = playerPlay();

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))
console.log(playScore)
console.log(compScore)
