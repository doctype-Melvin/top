//Choice Array
let choice = ['Rock', 'Paper', 'Scissors'];

//Player and computer functions
function playerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}
function computerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

//Player and computer choices
let player = playerChoice();
let computer = computerChoice();

//Counters
let playerScore = 0
let computerScore = 0
let roundsPlayed = 0

//The play round function
function playRound(player, computer) {
    if ((player == 'Rock' && computer == 'Scissors') ||
        (player == 'Scissors' && computer == 'Paper') ||
        (player == 'Paper' && computer == 'Rock')) {
            playerScore++
            return 'Player wins!'
        }
else if (player == computer) {
        return `It's a Draw!`
        } computerScore++
        return 'Computer wins!'

}

//Play 5 rounds


//Console.log
console.log(player)
console.log(computer)
console.log(playRound(player, computer))
console.log(playerScore)
console.log(computerScore)
