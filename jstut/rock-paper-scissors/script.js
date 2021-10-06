/*
1. User plays rock paper scissors agains computer. 
2. Computer should make a random choice of the three.
3. User should have an input option of choice. 
4. Some choices win over the other.
5. The game is round based. 
6. There will be a message after every round.
7. Wins and losses are counted.
8. Winner will be the one with three wins over the other player.
9. Upon finishing the game there will be a message.
10. Player may chose another round.
*/


//Start Array of choices
//const arr = ['Rock', 'Paper', 'Scissors'];
//console.log(arr);

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
    }
    else if (playerSelection == computerSelection) {
        return `Tied game! Both chose ${playerSelection}.`
    }
    return `Computer wins! ${computerSelection} beats ${playerSelection}!`
}

let computerSelection = computerPlay();
let playerSelection = 'Scissors';
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))