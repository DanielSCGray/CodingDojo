function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

/*
hello
Dojo
*/

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

/*
func call when assigning to result prints hello but var result's value is 15
so output is :
hello
result is 15
*/

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

/*
num is 3
result is 18
*/

var num = 15;
console.log(num);
function logAndReturn(num){
    console.log(num);   
    return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

/* #4
15 this is the top console.log call on var num
10 this is the log within the function call
10 this is the returned value saved as result
15 this is the secoond console.log call on var num
*/

var num = 15;
console.log(num);
function timesTwo(num){
   console.log(num);   
   return num*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

/* 5
15 this is the console.log call on var num
10 this is the console.log call on parameter num in this case 10 w/in func
20 this is the return value of timesTwo(10) saved as result
15 second console.log call on var num which remains 15
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

/* 6
num is 3 console.log call w/in the function called on 3
num is 5 console.log call w/in the function called on 5
result is 16 c.log call on var result
*/

function sumNums(num1, num2) {  
    return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))

/* 7
5 - the returned val of func call sumNums(2,3)
8 - the returned val of func call sumNums(3,5)
*/

function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))

/* 8
2 -  console.log call in the function w/ input 2,3
5 - console.log of the return value of function
3
8 - both same pattern as above
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

/* 9
sum is 5 - built in c.log for first func call
sum is 8 - built in c.log for 2nd call
result is 13 - c.log call on var result
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

/* 10
sum is 5
sum is 3 - built in c.log call happens first since the nested func must happen before the outer func call can run (since it needs to know the param it is taking as num 2)
sum is 6
sum is 3 
sum is 5
sum is 8
result is 19
*/
