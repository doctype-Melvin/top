10/08, Friday
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