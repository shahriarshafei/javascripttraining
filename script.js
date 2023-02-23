// Useful Codes:   
// alert() -> put out notification
// console.log() -> print in console
// arrayName.push() -> add an item to the end of the array


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
