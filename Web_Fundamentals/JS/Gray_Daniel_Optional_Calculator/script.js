var input = ''
var displayScreen = document.querySelector('#display')

function press(num) {
    input += num
    console.log(displayScreen.innerHTML)
    displayScreen.innerHTML = input
    console.log(displayScreen)
}

function setOP(op) {
    input += op
    displayScreen.innerHTML = input
}

function clr() {
    input = ''
    displayScreen.innerHTML = 0
}

function calculate() {
    var total = eval(input)
    input = total
    displayScreen.innerHTML = input
}
