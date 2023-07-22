var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 0, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]

var pacman = {
    x: 1,
    y: 1
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
        }
        output += "\n</div>"
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*40+'px';
    document.getElementById('pacman').style.left = pacman.x*40+'px';
}

displayWorld()
displayPacman()

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
        displayWorld();
    }
    // console.log(world[pacman.y][pacman.x])
    // console.log(pacman.y)

    displayPacman();
}