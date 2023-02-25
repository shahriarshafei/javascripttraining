// Useful Codes:   
// alert() -> put out notification
// console.log() -> print in console
// arrayName.push() -> add an item to the end of the array
// Math.random() -> generates random number
// Math.floor() -> round any number by removing it's decimals, regardless of their value
// var audio = new Audio("URL"); -> audio.play(); -> method for playing an audio file

// Fibonnaci generator: "n" dedicates the amount of numbers inside the array. output is in form of array

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

// Dice number generator

function diceGenerator() {
var diceNumber = Math.floor(Math.random()*6)+1;
    return diceNumber;
}

console.log(diceGenerator());
