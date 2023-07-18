//1. Always Hungry

function alwaysHungry(array) {
    var foodCount = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 'food') {
            console.log('yummy')
            foodCount ++
        }
        
    }
    if (foodCount === 0) {
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//2. high pass filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//3. better than average
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    console.log(sum)
    var avg = sum / arr.length;
    console.log(avg)
    var count = 0;
    // count how many values are greated than the average
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
        count ++
        }
    }
    return count;
}
var result2 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result2); // we expect back 4

//4. Array reverse
function reverse(arr) {
    var j = arr.length - 1
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j-- 
    }
    return arr;
}
    
var result3 = reverse(["a", "b", "c", "d", "e"]);
console.log(result3); // we expect back ["e", "d", "c", "b", "a"]

// 5. Fibonacci Array

// Fibonacci numbers have been studied for years and appear often in nature. 
//Write a function that will return an array of Fibonacci numbers up to a given length n. 
//Fibonacci numbers are calculated by adding the last two values in the sequence together. 
//So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i = 2; i < n; i++) {
        fibArr[i] = fibArr[i-2] + fibArr[i-1]
    }
    return fibArr;
}
    
var result4 = fibonacciArray(10);
console.log(result4); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
