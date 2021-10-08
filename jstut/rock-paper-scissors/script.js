//Choice Array
let choice = ['rock', 'paper', 'scissors'];

//Player and computer functions
function playerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}
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
    if ((player.toLowerCase() == 'rock' && computer == 'scissors') ||
        (player.toLowerCase() == 'scissors' && computer == 'paper') ||
        (player.toLowerCase() == 'paper' && computer == 'rock')) {
            playerScore++;
            return 'Player wins!'
        }
else if (player == computer) {
            return `It's a draw!`
        }   computerScore++
            return 'Computer wins!'
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
            return `Player has won the game!`
        }else if (playerScore < computerScore){
                return `Computer has won the game!`
                    }return `Tied score! It's a draw!`
    
};
console.log(game());

//Console.log
console.log('PL   CPU   RDS')
console.log(playerScore)
console.log(computerScore)
console.log(roundsPlayed)