var answer = 6 + 3 / 3;
console.log(answer);
//7

var answer = (6 + 3) / 3;
console.log(answer);
//3

for(var i=1; i<25; i++) {
    console.log(i);
    i += 4;
}
// 1, 6, 11, 16, 21

for(var i=22; i>5; i--) {
    console.log(i);
    i -= 4;
}
// 22, 17, 12, 7

var i = 11;
if(i % 2 == 0) {
    console.log("even");
} else {
    console.log(i);
}
// 11

for(var i=9; i>2; i--) {
    if(i % 2 == 0) {
        console.log("even");
    } else {
        console.log(i);
    }
}
// 9, even, 7, even, 5, even, 3

var arr = [1, 4, 7, 6, 2, 7];
var count = 0;
for(var i=0; i<arr.length; i++) {
    if(arr[i] < 5) {
        count++;
    }
}
console.log(count);
//3

function print112to168() {
    // your code here
    for (var i = 112; i < 169; i++) {
        console.log(i)
    }
}

print112to168();

function findAverage(arr) {
    var currentSum = 0;
    // your code here
    for (var i = 0; i < arr.length; i++) {
        currentSum += arr[i]
    }
    return currentSum / arr.length;
}

findAverage([12, 21, 3.6, 9, 12, 8]);

function countNegatives(arr) {
    var count = 0;
    // your code here
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }
    return count;
}

countNegatives([12, -21, 3.6, 9, 12, -8]);