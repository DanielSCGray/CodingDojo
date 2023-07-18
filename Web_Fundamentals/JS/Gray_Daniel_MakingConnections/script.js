console.log("page loaded...");

function nameChange(id) {
    document.querySelector(id).innerText = 'Jean Ode'
}
function addOne(id) {
    var obj = document.querySelector(id)
    var num = Number(obj.innerText)
    num += 1
    obj.innerText = num.toString()
}
function minusOne(id) {
    var obj = document.querySelector(id)
    var num = Number(obj.innerText)
    num -= 1
    obj.innerText = num.toString()
}
function remove(id) {
    document.querySelector(id).remove()
}