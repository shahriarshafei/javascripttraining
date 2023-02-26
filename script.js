// Useful Codes:   
// arrayName.push() -> add an item to the end of the array
// var audio = new Audio("URL"); -> audio.play(); -> method for playing an audio file

// Fibonnaci generator: "n" dedicates the amount of numbers inside the array. output is in form of array

// Exrecise 1: Write a program that inputs user name and alrts it with the first charachter in uppercase form and the rest in lower case, no matter how the user input it
var userInput = prompt("Please enter your name: ");
var firstChar = userInput.slice(0,1).toUpperCase();
var restChar = userInput.slice(1, userInput.length).toLowerCase();
alert(firstChar+restChar);

// Exrecise 2: Write a program that outputs Fibonacci numbers of the desired lenght
function fibonacciGenerator(n) {

    var fibArr=[];

    if (n===1){
        fibArr=[0];
    }

    else if (n===2) {
        fibArr=[0,1];
    }

    else {
        fibArr = [0,1];
        for (var i = 3; i<n; i++){
            fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length -1]);
        }
    }

    return fibArr;
}

console.log(fibonacciGenerator(10));

// Exercise 3: Dice number generator
function diceGenerator() {
var diceNumber = Math.floor(Math.random()*6)+1;
    return diceNumber;
}

console.log(diceGenerator());
