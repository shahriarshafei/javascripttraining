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
