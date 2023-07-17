function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage'])
console.log(p1)

var p2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions'])

var crustArr = ['thin-crust', 'deep dish', 'hand tossed']
var sauceArr = ['marinara', 'pesto', 'BBQ']
var cheeseArr = ['mozzerella', 'parmesian', 'jack']
var toppingsArr = ['pepperoni', 'sausage', 'olives', 'bell peppers', 'mushrooms']

function randomPizza() {
    var pizza = {}
    pizza.crust = crustArr[Math.floor(Math.random() * crustArr.length)]
    pizza.sauce = sauceArr[Math.floor(Math.random() * sauceArr.length)]
    pizza.cheeses = cheeseArr[Math.floor(Math.random() * cheeseArr.length)]
    pizza.toppings = toppingsArr[Math.floor(Math.random() * toppingsArr.length)]
    return pizza
}
var pr = randomPizza()
console.log(pr)
