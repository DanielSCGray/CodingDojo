function popFront(arr) {
    var front = arr[0]
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }
    arr.pop()
    return front 
}

var test = [900,1,2,3,4]
console.log(popFront(test))
console.log(test)