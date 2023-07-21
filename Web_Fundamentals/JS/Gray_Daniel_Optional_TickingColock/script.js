function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}

// setInterval( function() {
//     var time = getSecondsSinceStartOfDay();
//         console.log(time);
    
// }, 1000);

var hour = document.querySelector('#hour')
hour.style.transform = 'rotate(2)'
console.log(hour.style.transform)

