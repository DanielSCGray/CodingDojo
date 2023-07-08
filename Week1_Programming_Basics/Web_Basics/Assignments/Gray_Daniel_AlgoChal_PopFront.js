function popFront(arr) {
    var front = arr[0]
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }
    arr.pop()
    return front 
}