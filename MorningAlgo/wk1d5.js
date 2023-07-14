var input = ["a", "b", "c", "d", "e"]

function reverseArr(arr) {
    var newArr = []
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
        
    }
    return newArr
}
console.log(reverseArr(input))

function reverseArr2(arr) {
    var newArr = []
    var j = arr.length - 1
    for (var i = 0; i < arr.length; i++) {
        newArr[j] = arr[i]
        j--
    }
    return newArr
}
console.log(reverseArr2(input))

