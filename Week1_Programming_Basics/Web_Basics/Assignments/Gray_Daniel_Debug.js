// Debug the following code that removes negative values from an array

function removeNegatives(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0
            // negatives are removed and replaced with 0
        }
    }
    return arr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);

// Alt solution

function removeNegatives(arr) {
    var newArr = []
    for(var i=0; i<arr.length; i++) {
        if(arr[i] >= 0) {
            newArr.push(arr[i])
            // negatives are excluded from the new array newArr
        }
    }
    return newArr;
}