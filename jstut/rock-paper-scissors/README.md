Oct. 08, Friday
After three days I finally accomplished the automated version
of the Rock Paper Scissors challenge. This console based game
now uses functions for the decision process, has a function which contains 
the winning cases, another function to play 5 rounds and to output a 
final score message that declares the winner. 

Next I will have to change the player input to make this game interactive.
The user input should be case insensitive and only pass three options. There
might be a solution that promts the three options and accesses an array to 
pass the user choice into the function. 

1 = rock, 2 = paper, 3 = scissors

Or the promt will only take the strings as arguments. Here I would have to 
limit the input options so that only rock, paper or scissors will be 
accepted. 

10/08, Friday **UPDATE**
I now added the user input function. Upon user input from promt window,
the player function picks a weapon from array. If the user just clicks OK
or cancel, the auto function chooses a weapon. After each round the outcome
and score are displayed. After a round the user can pick his weapon
for the next round. The final winner declaration and score is displayed.

Next: If the user clicks cancel, the auto function should play the game or the 
game should be canceled.

Oct. 15, Friday
Starting with adding a UI to the project. 

Oct. 19, Tuesday
What a battle this has been. I couldn't come up with a solution myself.
Did a bit of digging and found some code that helped
me big time. The functionality is now implemented
but I'm really struggling with the DOM 
manipulation part. Once I finished this assisted version, 
I will have to redo everything again. Repetition is key to learning.

Oct. 20, Wednesday
Yesterday I started the whole RPS project from scratch. 
I started out with assembling an HTML scaffolding followed by CSS styling.
Just today I rewrote the whole game logic in JS. 
I ended up adding more functionality than last time.
Points added:
-Scorebord with initial '0:0' value
-flex-grow properties (beta)
-clickable pictures (player input)
-animation when picture is clicked
-DOM manipulation (round winner and game winner declaration)
-Play again button that restarts the game

Next step: Modify code to add/remove classes for the computer choice animation.

Oct. 21, Thursday
Within the first hour of todays session I found a solution to my problem 
(with the help of the interwebs that is). My Problem was: The computer 
selection animation would only be triggered once (classList.add) or toggled (classList.toggle). 
I wanted to trigger the animation each round of playing the game. The solution involves triggering DOM reflow. 
What this does is it updates the elements properties and hence reinitializes them. The 'void' keyword let's me trigger this process.
To make the animation start over again each round, I simply used this flow: remove class >>> void (reflow using 'offsetWidth') >>> add class.
The whole rock paper scissors project will rest for now. I think I made some real progress and even had some big leaps in better understanding the JS syntax. I surely will come back later to this project but for now I feel like I have to move on.