// hwDone will be a boolean. Time will be a number from 0 to 24
function studentReward(hwDone, time) {
    var choice;
    if(hwDone) {
        if(time < 10) {
            choice = 'Latte'
        }
        else if (time >= 10 && time <= 16) {
            choice = 'Hot Chocolate'
        }
        else if (time > 16 && time <= 22) {
            choice = 'Ice Cream'
        }
        else {
            choice = 'Sleep'
        }
    }
    else {
        choice = 'Do your homework'
    }
    return choice
}

// Feature 1
function studentReward1(hwDone, time, day) {
    var choice;
    if(hwDone) {
        if(time < 10) {
            choice = 'Latte'
        }
        else if (time >= 10 && time <= 16) {
            choice = 'Hot Chocolate'
        }
        else if (time > 16 && time <= 22) {
            choice = 'Ice Cream'
        }
        else {
            choice = 'Sleep'
        }
    }
    else {
        choice = 'Do your homework'
    }
    if (choice === 'Ice Cream') {
        if (day === 'Wednesday') {
            choice = 'Strawberry Ice Cream'
        }
        else {
            choice = 'Vanilla Ice Cream'
        }
    }
    return choice
}

// Feature 2
function studentReward2(hwDone, time, day) {
    var choice;
    if(hwDone) {
        if(time < 10) {
            choice = 'Latte'
        }
        else if (time >= 10 && time < 15) {
            choice = 'Hot Chocolate'
        }
        else if (time >= 15 && time <= 18) {
            if (time % 2 === 0) {
                choice = 'Ice Cream'
            }
            else {
                choice = 'Hot Chocolate'
            }
        }
        else if (time > 18 && time <= 22) {
            choice = 'Ice Cream'
        }
        else {
            choice = 'Sleep'
        }
    }
    else {
        choice = 'Do your homework'
    }
    if (choice === 'Ice Cream') {
        if (day === 'Wednesday') {
            choice = 'Strawberry Ice Cream'
        }
        else {
            choice = 'Vanilla Ice Cream'
        }
    }
    return choice
}

//Feature 3
function studentReward3(hwDone, time, day) {
    var choice;
    if(hwDone) {
        if(time < 10) {
            choice = 'Latte'
        }
        else if (time >= 10 && time < 15) {
            choice = 'Hot Chocolate'
        }
        else if (time >= 15 && time <= 18) {
            if (time % 2 === 0) {
                var evenOptions = ['Ice Cream', 'Cookies', 'Candy']
                var randomI = Math.floor(Math.random() * evenOptions.length)
                choice = evenOptions[randomI]
            }
            else {
                var oddOptions = ['Hot Chocolate', 'Tea', 'Cake']
                var randomI = Math.floor(Math.random() * oddOptions.length)
                choice = oddOptions[randomI]
            }
        }
        else if (time > 18 && time <= 22) {
            choice = 'Ice Cream'
        }
        else {
            choice = 'Sleep'
        }
    }
    else {
        choice = 'Do your homework'
    }
    if (choice === 'Ice Cream') {
        if (day === 'Wednesday') {
            choice = 'Strawberry Ice Cream'
        }
        else {
            choice = 'Vanilla Ice Cream'
        }
    }
    return choice
}
