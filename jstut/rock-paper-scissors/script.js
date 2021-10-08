//Choice Array
let choice = ['rock', 'paper', 'scissors'];

//Player and computer functions
    //This function is the automated playerChoice function
/*function playerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}
*/
//This function gets player input to play one round
function playerChoice() {
    let playerWeapon = prompt(`Your weapon of choice.
        1 = Rock    2 = Paper    3 = Scissors
        Or just hit OK for random attack`);
        if (playerWeapon == 1) {
            return choice[0];            
        }else if (playerWeapon == 2) {
            return choice[1];
        }else if (playerWeapon == 3) {
            return choice[2];
        }else if (playerWeapon == "") { //If user only clicks OK the random function picks weapon
            return choice[Math.floor(Math.random()*choice.length)];
        }
}

//This is the computer function
function computerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

//Player and computer variables
let player
let computer 

//Counters
let playerScore = 0
let computerScore = 0
let roundsPlayed = 0

//The play round function
function playRound() {
    //Rock, paper or scissors choice functions
    player = playerChoice();
        console.log(player);
    computer = computerChoice();
        console.log(computer);

    //Winning cases
    roundsPlayed++
    if ((player == 'rock' && computer == 'scissors') ||
        (player == 'scissors' && computer == 'paper') ||
        (player == 'paper' && computer == 'rock')) {
            playerScore++;
            return alert(`Player wins! 
                    Score Player: ${playerScore} vs Computer: ${computerScore}`)
        }else if (player == computer) {
            return alert(`It's a draw!
                    Score Player: ${playerScore} vs Computer: ${computerScore}`)
        }   computerScore++
            return alert(`Computer wins!
                    Score Player: ${playerScore} vs Computer: ${computerScore}`)
};


//The play function
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
    
};
console.log(game());

//Console.log
console.log('PL   CPU   RDS')
console.log(playerScore)
console.log(computerScore)
console.log(roundsPlayed)