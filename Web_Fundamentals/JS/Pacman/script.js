var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
    [2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2],
    [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 0, 2, 2, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 4, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2],
    [2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2],
    [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]
function countPoints(worldArray){
    var sum = 0;
    for (var i = 0; i < worldArray.length; i++){
        for (var j = 0; j < worldArray[i].length; j++){
            if (worldArray[i][j] === 1) {
                sum += 1
            }
            else if (worldArray[i][j] === 3) {
                sum += 25
            }
            else if (worldArray[i][j] === 4) {
                sum += 100
            }
            
        }
    }
    return sum
}

var totalPoints = countPoints(world)
// var totalPoints = 2;

console.log(totalPoints);
//CHARACTERS
var pacman = {
    x: 1,
    y: 1
}
var redGhost = {
    x: 9,
    y: 9,
    name: 'redghost',
    difficulty: 1
}
var tealGhost = {
    x: 10,
    y: 9,
    name: 'tealghost',
    difficulty: 2
}
var yellowGhost = {
    x: 11,
    y: 9,
    name: 'yellowghost',
    difficulty: 4
}
var skullGhost = {
    x: 12,
    y: 9,
    name: 'skullghost',
    difficulty: 100
}

var ghostArray = [redGhost, tealGhost, yellowGhost, skullGhost]

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
                output += "<div class='dollars'></div>"
            }
            if(world[i][j] === 4){
                output += "<div class='treasure'></div>"
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
// ORIGINAL DISPLAY GHOST
// function displayRedGhost(){
//     document.getElementById('redghost').style.top = redGhost.y*40+'px';
//     document.getElementById('redghost').style.left = redGhost.x*40+'px';
// }
// function displayTealGhost(){
//     document.getElementById('tealghost').style.top = tealGhost.y*40+'px';
//     document.getElementById('tealghost').style.left = tealGhost.x*40+'px';
// }
// function displayYellowGhost(){
//     document.getElementById('yellowghost').style.top = yellowGhost.y*40+'px';
//     document.getElementById('yellowghost').style.left = yellowGhost.x*40+'px';
// }
// function displaySkullGhost(){
//     document.getElementById('skullghost').style.top = skullGhost.y*40+'px';
//     document.getElementById('skullghost').style.left = skullGhost.x*40+'px';
// }

//REFACTORED DISPLAY GHOST NOW MODULAR
function displayGhost(ghost){
    document.getElementById(ghost.name).style.top = ghost.y*40+'px';
    document.getElementById(ghost.name).style.left = ghost.x*40+'px';
}

var winScreen = document.getElementById('win-screen')

var score = document.getElementById('score')
function updateScore(val){
    var newScore = Number(score.innerText) + val;
    score.innerText = newScore;
    if(newScore === totalPoints){
        winScreen.style.display = 'block';
        clearInterval(redGhostMovement);
        clearInterval(tealGhostMovement);
        clearInterval(yellowGhostMovement);
        clearInterval(skullGhostMovement);
    }

    // console.log(score)
}

displayWorld();
displayPacman();
displayGhost(redGhost);
displayGhost(tealGhost);
displayGhost(yellowGhost);
displayGhost(skullGhost);

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
var gameOverScreen = document.getElementById('game-over-screen')

function ghostMove(ghost){
    var chance = Math.ceil(Math.random()*(ghost.difficulty *5))
    if(chance > 4){
        smartGhostMove(ghost)
    }
    else {
        randomGhostMove(ghost);
    }
    displayGhost(ghost);
    if (ghost.x === pacman.x && ghost.y === pacman.y){
        gameOverScreen.style.display = 'block';
        clearInterval(redGhostMovement);
        clearInterval(tealGhostMovement);
        clearInterval(yellowGhostMovement);
        clearInterval(skullGhostMovement);
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
        updateScore(25);
        displayWorld();
    }
    else if (world[pacman.y][pacman.x] === 4){
        world[pacman.y][pacman.x] = 0;
        updateScore(100);
        displayWorld();
    }
    // console.log(world[pacman.y][pacman.x])
    // console.log(pacman.y)
    // ghostMoveRandom();
    // smartGhostMove(redGhost);
    // randomGhostMove(redGhost);
    // ghostMove(redGhost);
    // displayRedGhost();

    // ghostMove(tealGhost);
    // displayTealGhost();

    // ghostMove(yellowGhost);
    // displayYellowGhost();

    // ghostMove(skullGhost);
    // displaySkullGhost();

    // ghostMove(redGhost);

    // ghostMove(tealGhost);

    // ghostMove(yellowGhost);

    // ghostMove(skullGhost);

    displayPacman();

    for (var i = 0; i < ghostArray.length; i++){
        var cycleGhost = ghostArray[i];
        if (cycleGhost.x === pacman.x && cycleGhost.y === pacman.y){
            gameOverScreen.style.display = 'block';
            clearInterval(redGhostMovement);
            clearInterval(tealGhostMovement);
            clearInterval(yellowGhostMovement);
            clearInterval(skullGhostMovement);
        }
    }


    // for (var i = 0; i < ghostArray.length; i++){
    //     if(ghostArray[i].x === pacman.x && ghostArray[i].y === pacman.y){
    //         alert('GAME OVER. Refresh to try again')
    //     }
    // }
}


    // var redGhostMovement = setInterval(ghostMove, 500, redGhost);
    // var tealGhostMovement = setInterval(ghostMove, 500, tealGhost);
    // var yellowGhostMovement = setInterval(ghostMove, 500, yellowGhost);
    // var skullGhostMovement = setInterval(ghostMove, 500, skullGhost);

