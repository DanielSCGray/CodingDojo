var arr = ["Up", "You", "Give", "To", "Going", "Never"];
for(var i = arr.length-1; i >= 0; i = i - 1) {
    console.log(arr[i]);
}
/*
length is 6 so i will start at 5
console.log(arr[5]) - Never
5-1 =4
clog(arr[4]) - Going
--
clog(arr[3]) - To
same pattern to print rest of lyrics
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}

/*
i starts at 1
sum = 0 + arr[1] = 0 +2 = 2
log arr[1] : 2
log sum : 2
i +2 =3
sum = 2 + arr[3] = 2 +4 =6
log arr[3] : 4
log sum : 6 
i +2 = 5
sum = 6 + arr[5] = 6 + 6 = 12
log arr[5] : 6
log sum: 12
i +2 =7
sum = 12 + arr[7] = 12 + 8 = 20
log arr[7]: 8
log sum: 20
i+2=9
sum = 20 +arr[9] = 20 + 10 = 30
log arr[9]: 10
log sum: 30 
i +2 = 11
11>10
loop is complete
*/

var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 6) {
        console.log(true);
    }
}

/*
i starts at 0
arr[0] is 8 
8>6 yes
run code in conditional block: clog true prints true
i+1
arr[1] is 2
2>=6 ? No
dont run conditional
i+1 =2 
arr[2] = 0
Conditional? No
i+1=3
arr[3] is 6
6>=6 Yes
clog true
i++ =4
arr[4] = 12
12>=6 yes
clog true
i++ =5
arr[5] = 4
4>=6? no
i++ =6
arr[6] = 3
3>=6 ? no 
i++ = 7 
arr.length = 7
7<7 ? No 
loop terminates
*/
