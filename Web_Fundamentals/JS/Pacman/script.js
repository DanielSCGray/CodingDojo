var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2],
    [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2],
    [2, 1, 1, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2],
    [2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2],
    [2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

]

var pacman = {
    x: 1,
    y: 1
}
var redGhost = {
    x: 9,
    y: 9,
    name: 'Red Ghost',
    difficulty: 1
}

function displayWorld() {
    var output = ''
    for(var i =0; i<world.length; i++){
        output += "\n<div class='row'>\n"
        for(var j =0; j<world[i].length; j++) {
            if(world[i][j] === 2) {
                output += "<div class='brick'></div>"
            }
            if(world[i][j] === 1) {
                output += "<div class='coin'></div>"
            }
            if(world[i][j] === 0){
                output += "<div class='empty'></div>"
            }
            if(world[i][j] === 3){
                output += "<div class='cherry'></div>"
            }
        }
        output += "\n</div>"
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*40+'px';
    document.getElementById('pacman').style.left = pacman.x*40+'px';
}

function displayGhost(){
    document.getElementById('redghost').style.top = redGhost.y*40+'px';
    document.getElementById('redghost').style.left = redGhost.x*40+'px';
}

var score = document.getElementById('score')
function updateScore(val){
    var newScore = Number(score.innerText) + val
    score.innerText = newScore
    // console.log(score)
}

displayWorld()
displayPacman()
displayGhost()

// GHOST MOVEMENT 
// function ghostMoveRandom(){
//     var directionArray = ['down', 'up', 'right', 'left']
//     var direction = directionArray[Math.floor(Math.random()*4)]
//     if (direction === 'down') {
//         redGhost.y++;
//         if(world[redGhost.y][redGhost.x] === 2){
//             redGhost.y--
//         }
//     }
//     if (direction === 'up') {
//         redGhost.y--;
//         if(world[redGhost.y][redGhost.x] === 2){
//             redGhost.y++
//         }
//     }
//     if (direction === 'right') {
//         redGhost.x++;
//         if(world[redGhost.y][redGhost.x] === 2){
//             redGhost.x--
//         }
//     }
//     if (direction === 'left') {
//         redGhost.x--;
//         if(world[redGhost.y][redGhost.x] === 2){
//             redGhost.x++
//         }
//     }
//     console.log('ghost moves ' + direction)
// }

function buildRandomDirections(){
    var directionArray = ['down', 'up', 'right', 'left']
    var randomDirections = []
    while (randomDirections.length < 4) {
        var randomI = Math.floor(Math.random()*4)
        if (directionArray[randomI]) {
            randomDirections.push(directionArray[randomI]);
            directionArray[randomI] = 0;
        }
    }
    return randomDirections
}
console.log(buildRandomDirections())

function buildSmartDirections(ghost){
    var smartDirectionArray = []
    var xAxis = pacman.x - ghost.x
    var yAxis = pacman.y - ghost.y
    while (smartDirectionArray.length < 4) {
        if (Math.abs(xAxis) < Math.abs(yAxis)){
            if (yAxis > 0){
                smartDirectionArray.push('down')
            }
            else {
                smartDirectionArray.push('up')
            }
            if (xAxis > 0){
                smartDirectionArray.push('right')
            }
            else {
                smartDirectionArray.push('left')
            }
            if (smartDirectionArray[0] === 'down'){
                smartDirectionArray.push('up')
            }
            else {
                smartDirectionArray.push('down')
            }
            if (smartDirectionArray[1] === 'right'){
                smartDirectionArray.push('left')
            }
            else {
                smartDirectionArray.push('right')
            }
        }
        else {
            if (xAxis > 0){
                smartDirectionArray.push('right')
            }
            else {
                smartDirectionArray.push('left')
            }
            if (yAxis > 0){
                smartDirectionArray.push('down')
            }
            else {
                smartDirectionArray.push('up')
            }
            if (smartDirectionArray[0] === 'right'){
                smartDirectionArray.push('left')
            }
            else {
                smartDirectionArray.push('right')
            }
            if (smartDirectionArray[1] === 'down'){
                smartDirectionArray.push('up')
            }
            else {
                smartDirectionArray.push('down')
            }
        }
    }
    console.log(smartDirectionArray)
    return smartDirectionArray;
}

function randomGhostMove(ghost){
    var directions = buildRandomDirections()
    for (var i =0; i<directions.length; i++){
        if(directions[i] === 'down' && world[ghost.y+1][ghost.x] !== 2){
            ghost.y++;
            console.log(ghost.name + ' randomly moves ' + directions[i])
            return
        }
        else if(directions[i] === 'up' && world[ghost.y-1][ghost.x] !== 2){
            ghost.y--;
            console.log(ghost.name + ' randomly moves ' + directions[i])
            return
        }
        else if(directions[i] === 'right' && world[ghost.y][ghost.x+1] !== 2){
            ghost.x++;
            console.log(ghost.name + ' randomly moves ' + directions[i])
            return
        }
        else if(directions[i] === 'left' && world[ghost.y][ghost.x-1] !== 2){
            ghost.x--;
            console.log(ghost.name + ' randomly moves ' + directions[i])
            return
        }
    }
}

function smartGhostMove(ghost){
    var directionArr = buildSmartDirections(ghost);
    for (i=0; i<directionArr.length;i++){
        var smartDirection = directionArr[i]
        if(smartDirection === 'down' && world[ghost.y+1][ghost.x] !== 2){
            ghost.y++;
            console.log('SMART ghost moves ' + smartDirection)
            return
        }
        else if(smartDirection === 'up' && world[ghost.y-1][ghost.x] !== 2){
            ghost.y--;
            console.log('SMART ghost moves ' + smartDirection)
            return
        }
        else if(smartDirection === 'right' && world[ghost.y][ghost.x+1] !== 2){
            ghost.x++;
            console.log('SMART ghost moves ' + smartDirection)
            return
        }
        else if(smartDirection === 'left' && world[ghost.y][ghost.x-1] !== 2){
            ghost.x--;
            console.log('SMART ghost moves ' + smartDirection)
            return
        }
    }
}
function ghostMove(ghost){
    var chance = Math.ceil(Math.random()*(ghost.difficulty *5))
    if(chance > 4){
        smartGhostMove(ghost)
    }
    else {
        randomGhostMove(ghost);
    }
    return
}

document.onkeydown = function(e){
    console.log(e.key)
    if (e.key === 'ArrowDown') {
        document.getElementById('pacman').style.transform = 'rotate(90deg)'
        pacman.y++;
        if(world[pacman.y][pacman.x] === 2){
            pacman.y--
        }
    }
    else if (e.key === 'ArrowUp'){
        document.getElementById('pacman').style.transform = 'rotate(270deg)'
        pacman.y--
        if(world[pacman.y][pacman.x] === 2){
            pacman.y++
        }
    }
    else if (e.key === 'ArrowRight'){
        document.getElementById('pacman').style.transform = 'rotate(0deg)'
        pacman.x++
        if(world[pacman.y][pacman.x] === 2){
            pacman.x--
        }
    }
    else if (e.key === 'ArrowLeft'){
        document.getElementById('pacman').style.transform = 'rotate(180deg)'
        pacman.x--
        if(world[pacman.y][pacman.x] === 2){
            pacman.x++
        }
    }

    if (world[pacman.y][pacman.x] === 1){
        world[pacman.y][pacman.x] = 0;
        updateScore(1);
        displayWorld();
    }
    else if (world[pacman.y][pacman.x] === 3){
        world[pacman.y][pacman.x] = 0;
        updateScore(50);
        displayWorld();
    }
    // console.log(world[pacman.y][pacman.x])
    // console.log(pacman.y)
    // ghostMoveRandom();
    // smartGhostMove(redGhost);
    // randomGhostMove(redGhost);
    ghostMove(redGhost);
    displayGhost();
    displayPacman();

}


