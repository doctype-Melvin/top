//The following section is about functions 

//replace(), join(), Math.random()
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join();
console.log(madeAString);

let myNumber = Math.random();
console.log(myNumber);

//call a function
function myFunction() { //this is a function declaration
    let message = 'hello world!';
    console.log(message);
}
myFunction(); //This line calls the function

//function expression
const myGreeting = function() { //this is a function expression
    console.log(message);
}

//anonymous functions are mainly used to run a load of code in response to an event
myButton.onclick = function() { //this function runs the code when a user clicks on a button
    console.log(message);
}