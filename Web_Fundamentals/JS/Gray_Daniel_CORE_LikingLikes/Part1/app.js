function addOne(id) {
    var obj = document.querySelector(id)
    console.log(obj)
    var num = Number(obj.innerText)
    console.log(num)
    num += 1
    obj.innerText = num.toString()
}

var numLikes1 = document.querySelector('#num-likes1')
console.log(numLikes1.innerText)
