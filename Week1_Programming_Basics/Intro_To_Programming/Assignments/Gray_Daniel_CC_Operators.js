function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    var remainder = numberOfPieces % numberOfPeople
    if (remainder === 0) {
        console.log('No leftovers for you!')
    }
    else if (remainder <= 2) {
        console.log('You have some leftovers')
    }
    else if (remainder <= 5) {
        console.log('You have leftovers to share')
    }
    else {
        console.log('Hold another party!')
    }
}