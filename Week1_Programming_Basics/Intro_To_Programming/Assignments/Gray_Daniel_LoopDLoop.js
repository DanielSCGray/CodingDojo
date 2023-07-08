/* How do we know we need a loop here?
We are repeating an action when a condition is met and there is a clear end condition

What's the starting point of the loop?
The loop will start at 0 because when a runner begins running the number of miles they have ran is zero.

When should the loop stop?
The loop stops at 6 because at 6 there will be no more candy released making it the last relevant mile marker

How will the loop know when to stop?
the end condition can be set w/in the for loop 

What's incrementing for each iteration of the loop?
the mile count is incrementing 

What variables do we need?
We need a mile counter
*/

for (var mileCount = 0; mileCount <= 6; mileCount++) {
    if (mileCount > 0 && mileCount % 2 == 0) {
        console.log('Release candy')
    }
}

//Bonus 
var mph = 7
for (var mileCount = 0; mileCount <= 6; mileCount++) {
    if (mileCount > 0 && mileCount % 2 == 0 && mph > 5.5) {
        console.log('Release candy')
    }
}