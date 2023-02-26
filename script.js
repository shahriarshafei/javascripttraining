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
if(userLeftYears===1){
    alert("You have "+userLeftYears+" year, "+userLeftMonths+" months, "+
                    userLeftWeeks+" weeks and "+userLeftDays+" days left to live");
    }
else {
alert("You have "+userLeftYears+" years, "+userLeftMonths+" months, "+
                    userLeftWeeks+" weeks and "+userLeftDays+" days left to live");
    }
