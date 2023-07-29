var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
    [2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2],
    [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 0, 0, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 0, 2, 2, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2],
    [2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2],
    [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 3, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]

//SCOREBOARD AND WIN CONDITION
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
// var totalPoints = 10;

console.log(totalPoints);

var winScreen = document.getElementById('win-screen')

var score = document.getElementById('score')
function updateScore(val){
    var newScore = Number(score.innerText) + val;
    score.innerText = newScore;
    if(newScore >= totalPoints){
        winScreen.style.display = 'flex';
        clearInterval(redGhostMovement);
        clearInterval(tealGhostMovement);
        clearInterval(yellowGhostMovement);
        clearInterval(skullGhostMovement);
    }

    // console.log(score)
}



//CHARACTERS
var pacman = {
    x: 1,
    y: 1,
    alive : true
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

//DISPLAY FUNCTIONS

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

//REFACTORED DISPLAY GHOST NOW MODULAR
function displayGhost(ghost){
    document.getElementById(ghost.name).style.top = ghost.y*40+'px';
    document.getElementById(ghost.name).style.left = ghost.x*40+'px';
}


//SCORE, WIN CONDITION, WIN SCREEN LAUNCH

var winScreen = document.getElementById('win-screen')

var score = document.getElementById('score')
function updateScore(val){
    var newScore = Number(score.innerText) + val;
    score.innerText = newScore;
    if(newScore >= totalPoints){
        winScreen.style.display = 'flex';
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

// GHOST MOVEMENT : DIRECTION ARRAYS


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
    // console.log(smartDirectionArray)
    return smartDirectionArray;
}

// GHOST MOVEMENT FUNCTIONS

function randomGhostMove(ghost){
    var directions = buildRandomDirections()
    for (var i =0; i<directions.length; i++){
        if(directions[i] === 'down' && world[ghost.y+1][ghost.x] !== 2){
            ghost.y++;
            // console.log(ghost.name + ' randomly moves ' + directions[i])
            return
        }
        else if(directions[i] === 'up' && world[ghost.y-1][ghost.x] !== 2){
            ghost.y--;
            // console.log(ghost.name + ' randomly moves ' + directions[i])
            return
        }
        else if(directions[i] === 'right' && world[ghost.y][ghost.x+1] !== 2){
            ghost.x++;
            // console.log(ghost.name + ' randomly moves ' + directions[i])
            return
        }
        else if(directions[i] === 'left' && world[ghost.y][ghost.x-1] !== 2){
            ghost.x--;
            // console.log(ghost.name + ' randomly moves ' + directions[i])
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
            // console.log('SMART ghost moves ' + smartDirection)
            return
        }
        else if(smartDirection === 'up' && world[ghost.y-1][ghost.x] !== 2){
            ghost.y--;
            // console.log('SMART ghost moves ' + smartDirection)
            return
        }
        else if(smartDirection === 'right' && world[ghost.y][ghost.x+1] !== 2){
            ghost.x++;
            // console.log('SMART ghost moves ' + smartDirection)
            return
        }
        else if(smartDirection === 'left' && world[ghost.y][ghost.x-1] !== 2){
            ghost.x--;
            // console.log('SMART ghost moves ' + smartDirection)
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
        gameOverScreen.style.display = 'flex';
        clearInterval(redGhostMovement);
        clearInterval(tealGhostMovement);
        clearInterval(yellowGhostMovement);
        clearInterval(skullGhostMovement);
        pacman.alive = false
    }
    return
}

//SPEED SETTINGS
var speedSetting = {
    pacmanSpeed : 150,
    ghostSpeed : 225
}

    var redGhostMovement = setInterval(ghostMove, speedSetting.ghostSpeed, redGhost);
    var tealGhostMovement = setInterval(ghostMove, speedSetting.ghostSpeed, tealGhost);
    var yellowGhostMovement = setInterval(ghostMove, speedSetting.ghostSpeed, yellowGhost);
    var skullGhostMovement = setInterval(ghostMove, speedSetting.ghostSpeed, skullGhost);


//PACMAN DIRECTION + PACMAN MOVEMENT

var pacmanDirection = ''

document.onkeydown = function(e){
    console.log(e.key)
    if (e.key === 'ArrowDown') {
        pacmanDirection = 'ArrowDown'
        document.getElementById('pacman').style.transform = 'rotate(90deg)'
        clearInterval(pacmanMovement);
        pacmanMovement = setInterval(pacmanMove, speedSetting.pacmanSpeed, pacmanDirection);
        return
    }
    else if (e.key === 'ArrowUp'){
        pacmanDirection = 'ArrowUp'
        document.getElementById('pacman').style.transform = 'rotate(270deg)'
        clearInterval(pacmanMovement);
        pacmanMovement = setInterval(pacmanMove, speedSetting.pacmanSpeed, pacmanDirection);
        return
    }
    else if (e.key === 'ArrowRight'){
        pacmanDirection = 'ArrowRight'
        document.getElementById('pacman').style.transform = 'rotate(0deg)'
        clearInterval(pacmanMovement);
        pacmanMovement = setInterval(pacmanMove, speedSetting.pacmanSpeed, pacmanDirection);
        return
    }
    else if (e.key === 'ArrowLeft'){
        pacmanDirection = 'ArrowLeft'
        document.getElementById('pacman').style.transform = 'rotate(180deg)'
        clearInterval(pacmanMovement);
        pacmanMovement = setInterval(pacmanMove, speedSetting.pacmanSpeed, pacmanDirection);
        return
    }
}

function pacmanMove(arrowKey){
    if (arrowKey === 'ArrowDown') {
        pacman.y++;
        if(world[pacman.y][pacman.x] === 2){
            pacman.y--
        }
    }
    else if (arrowKey === 'ArrowUp'){
        pacman.y--
        if(world[pacman.y][pacman.x] === 2){
            pacman.y++
        }
    }
    else if (arrowKey === 'ArrowRight'){
        pacman.x++
        if(world[pacman.y][pacman.x] === 2){
            pacman.x--
        }
    }
    else if (arrowKey === 'ArrowLeft'){
        pacman.x--
        if(world[pacman.y][pacman.x] === 2){
            pacman.x++
        }
    }

    if (pacman.alive){
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
    }
        

    displayPacman();

    for (var i = 0; i < ghostArray.length; i++){
        var cycleGhost = ghostArray[i];
        if (cycleGhost.x === pacman.x && cycleGhost.y === pacman.y){
            gameOverScreen.style.display = 'flex';
            clearInterval(redGhostMovement);
            clearInterval(tealGhostMovement);
            clearInterval(yellowGhostMovement);
            clearInterval(skullGhostMovement);
            pacman.alive = false
        }
    }
}

var pacmanMovement = setInterval(pacmanMove, speedSetting.pacmanSpeed, pacmanDirection)

