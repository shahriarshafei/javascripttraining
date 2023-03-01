// Useful Codes:   
// arrayName.push() -> add an item to the end of the array
// var audio = new Audio("URL"); -> audio.play(); -> method for playing an audio file

// Exrecise 1: Write a program that inputs user name and alrts it with the first charachter in uppercase form and the rest in lower case, no matter how the user input it
var userInput = prompt("Please enter your name: ");
var firstChar = userInput.slice(0,1).toUpperCase();
var restChar = userInput.slice(1, userInput.length).toLowerCase();
alert(firstChar+restChar);

// Exercise 2: Write a program that inputs your age and shows how many days, weeks, months and years remains of your life assuming you will die at 90
var userAge = prompt ("Please enter your age: ");
var userLeftYears = 90 - userAge;
var userLeftMonths = userLeftYears*12; //assuming there are 12 months in a year
var userLeftWeeks = userLeftYears*52;  //assuming there are 52 weeks in a year
var userLeftDays = userLeftYears*365;  //assuming there are 365 days in a year
function timeLeft(){
if(userLeftYears===1){
    alert("You have "+userLeftYears+" year, "+userLeftMonths+" months, "+
                    userLeftWeeks+" weeks and "+userLeftDays+" days left to live");
    }
else {
alert("You have "+userLeftYears+" years, "+userLeftMonths+" months, "+
                    userLeftWeeks+" weeks and "+userLeftDays+" days left to live");
    }
}
timeLeft();

// Exercise 3: Write a program that logs actions of a roboto that recieves an amount of-
//-money from you and goes to the store and buy as much bottles of milk as it can with-
//-that money and comes back to you give you back the milks and remaining of your money.
var priceOfMilk = 1.5; //assuming price of each bottle of milk is 1.5$
function robot(money){
    var bottlesOfMilk = Math.floor(money/priceOfMilk); //You can't buy less than 1 bottle of milk
    var remainderOfMoney = (money%priceOfMilk).toFixed(2);
    console.log("The robot takes "+money+"$.");
    console.log("The robot goes to the store.");
    console.log("The robot buys "+bottlesOfMilk+" bottles of milk.");
    console.log("The robot comes back home.");
    console.log("The robot gives you "+bottlesOfMilk+" bottles of milk and "
                +remainderOfMoney+"$ back.")
}
robot(17); //giving 17$ to the robot

// Exercise 4: Write a program to calculate BMI using user input of height and weight
// BMI = weight / (Height to the power of 2)
var userHeight = prompt("Please enter your height: "); // Height in "m"
var userWeight = prompt("Please enter your weight: "); // Weight in "kg"
function bmiCalculator (userHeight, userWeight){
    var bmi = userWeight / Math.pow(userHeight, 2);
    return Math.round(bmi);
}
alert("Your BMI is : " + bmiCalculator(userHeight, userWeight));

// Exercise 5: Write a program to generates dice number
function throwDice (){
    var diceNumber = Math.floor(Math.random()*6)+1;
    return diceNumber;
}
alert(throwDice());

// Exercise 6: Write a "Love Calculator" programs that inputs two names and calculates-
//-their compatibility mesured in percent and alerts custom messages based on score
var nameOne = prompt("Enter your name: ");
var nameTwo = prompt("Enter your crush's name: ");
function result (){
    var randomPercent = Math.round(Math.random()*100);
    return randomPercent
}
var result = result();
alert(nameOne+" and "+nameTwo+" compatibility rate is "+result+"%")

if (result<50){
    alert("They come along like gasoline and fire!")
    }
else if (result>50 && result<100){
    alert("They will be OK!")
    }
else if (result===100){
    alert("That's True Love My Friend!")
    }

// Exercise 7: Write a program that inputs number of the year and calculate if it's a leap-
//-year or not and output it. Leap year conditions: 1.Is divisible by "4" 2.Except if it's-
//-divisible by "100" 3.Unles if it's also divisible by "400"
var userInput = prompt("Please enter the year number: ");
var div4 = (userInput%4) === 0;
var div100 = (userInput%100) === 0;
var div400 = (userInput%400) === 0;
function leapCalculator(){
    if(div4){
        if(div100){
            if(div400){
                return " is a leap year."
            }
            else{
                return " is NOT a leap year."
            }  
        }
        else{
            return " is a leap year."
        }

    }
    else{
        return " is NOT a leap year."
    }
}

alert(userInput+leapCalculator());

// Exercise 8: Write a program with a pre-made guest list that asks user to inputs his/her name
//-and check if the user's name is among the names in the list. if so alert a greeting message-
//-and if not some other message
var guestList = ["angela", "david", "sarah", "rachel", "ryrus"]
var userInput7 = prompt("Please enter your name: ").toLocaleLowerCase();
if (guestList.includes(userInput7)){
    alert("Welcome!")
}
else {
    alert("Sorry, you're not invited!")
}

// Exercise 9: Write a program that inputs a number as array lenght and print out an array-
//-in console that says "Fizz" for any number that is divisible by 3, "Buzz" for any number-
//-that is divisible by 5, and "FizzBuzz" for any number that is divisible by 3 and 5
var userInput9 = prompt("Please enter your desire array lenght: ");
var fbArray=[];
for(var i =0; i<userInput9; i++){
    var fbNumber = i+1;
    var fbDivBy5 = (fbNumber%5===0);
    var fbDivBy3 = (fbNumber%3===0);
    if(fbDivBy5&&fbDivBy3){
        fbArray.push("FizzBuzz")
    }
    else if(fbDivBy5){
        fbArray.push("Buzz")
    }
    else if(fbDivBy3){
        fbArray.push("Fizz")
    }
    else{
        fbArray.push(fbNumber)
    }
}
console.log(fbArray);

// Exercise 10: Write a program that randomly outputs a name from a name list as to indicates-
//-who is going to pay for the lunch
var lunchListEx10 = ["Amanda", "Roger", "Mathew", "Jason", "Monica", "Deby"];

function lunchPayName(){
    var numberOfPeopleEx10 = lunchListEx10.length;
    var randomNumberEx10 = Math.random();
    var arrayPositionEx10 = Math.floor(randomNumberEx10*numberOfPeopleEx10);
    return lunchList[arrayPositionEx10];
}
alert("It's "+lunchPayName()+ " turn to pay for lunch!");

// Exercise 11: Write a program that prints the lyrics of the song "99 bottle of beer" using-
//-while loop in the console
var beer = 99;
while(beer>1){
    var bottleWord = "bottles";
    
    console.log(beer+" bottles of beer on the wall, "+beer+ " " +bottleWord+" of beer.");
    beer--;
    if (beer===1){
        bottleWord = "bottle"
    }
    console.log("Take one down and pass it around, "+beer+ " " + bottleWord+" of beer on the wall.");
    console.log("");
}
function beerSongEnd(){
    console.log(beer+" bottle of beer on the wall, "+beer+" bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    console.log("");
    console.log("No more bottles of beer on the wall, no more bottles of beer");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
}
beerSongEnd();

// Exercise 12: Write a programs to prints out Fibonacci sequence of desired lenght
var userInputEx12 = prompt("Enter the lenght of the squence: ")
function fibonacciGenerator(){
    var fibonacciArray = [];
    if(userInputEx12==1){
        fibonacciArray=[0]
    }
    else if (userInputEx12==2){
        fibonacciArray=[0,1]
    }
    else if(userInputEx12>2){
        fibonacciArray=[0,1];
        for(var i = 3; i<=userInputEx12; i++){
            fibonacciArray.push(fibonacciArray[i-3]+fibonacciArray[i-2])
        }
    }
    else{
        fibonacciArray=["You didn't select a valid range."]
    }
    return fibonacciArray;
}
function consloeLog(prompt){
    console.log(prompt);
}
consloeLog(fibonacciGenerator());
