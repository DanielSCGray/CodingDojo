function minToFront(arr) {
    var min = arr[0]
    var minIdx = 0
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            minIdx = i
        }
    }
    if (minIdx !== 0) {
        for (var j = minIdx; j > 0; j--) {
            arr[j] = arr[j-1]
        }
        arr[0] = min
    }
    return arr
}

var testArr = [5, 93, 22, 4, 1]

console.log(minToFront(testArr))