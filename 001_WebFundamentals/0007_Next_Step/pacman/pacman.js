var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,2,1,3,1,0,0,1,0,0,1,2,1,1,1,1,1,2],
    [2,0,3,2,0,2,2,2,1,0,1,3,1,1,1,2,2,2,0,2],
    [2,1,0,2,1,2,1,2,1,2,3,1,0,2,0,2,0,0,0,2],
    [2,1,1,2,1,2,1,2,1,2,0,0,1,0,0,1,1,2,2,2],
    [2,1,0,2,2,2,1,2,0,0,1,0,0,3,1,2,1,1,1,2],
    [2,0,0,1,0,0,1,2,1,1,2,1,1,0,0,2,2,2,0,2],
    [2,1,0,1,0,1,3,2,1,1,2,0,0,0,1,2,0,1,1,2],
    [2,1,1,1,0,0,1,0,0,1,2,1,3,1,1,2,0,2,2,2],
    [2,0,0,2,0,2,2,2,0,1,2,1,1,1,1,0,1,0,0,2],
    [2,0,1,2,3,2,1,2,1,1,1,0,1,2,0,2,2,2,0,2],
    [2,1,1,2,1,2,1,1,0,0,0,1,0,1,1,1,1,1,3,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 1,
    y: 1
};

var score = 0;

function displayWorld(){
    var output = '';

    for(var i=0; i<world.length ;i++){
        output += "\n<div class=row>\n";
        for(var j=0; j<world[i].length;j++){
            if(world[i][j] == 2){
                output += "<div class='brick'></div>";
            } else if (world[i][j] == 1){
                output += "<div class='coin'></div>";
            } else if (world[i][j] == 0){
                output += "<div class='empty'></div>";
            } else if (world[i][j] == 3){
                output += "<div class='cherry'></div>";
            };
        };
        output += "\n</div>";
    };
    // console.log(output);
    document.getElementById("world").innerHTML = output;

};
function displayPacman(){
    document.getElementById("pacman").style.left = 20*pacman.x + "px";
    document.getElementById("pacman").style.top = 20* pacman.y + "px";
}
function displayScore(){
    document.getElementById("score").innerHTML =  score ;
}

displayWorld();
displayPacman();

document.onkeydown = function(e){
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){           // Left
        pacman.x --;
        document.getElementById("pacman").style.transform = "rotate(180deg)";
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){      // Right
        pacman.x ++;
        document.getElementById("pacman").style.transform = "rotate(0deg)";
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){      // Top
        pacman.y --;
        document.getElementById("pacman").style.transform = "rotate(-90deg)";
    }
    else if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){      // Down
        pacman.y ++;
        document.getElementById("pacman").style.transform = "rotate(90deg)";
    }

    if (world[pacman.y][pacman.x] == 1 || world[pacman.y][pacman.x] == 3){
        if (world[pacman.y][pacman.x] == 1){
            score += 10;
        } else if (world[pacman.y][pacman.x] == 3){
            score += 50;
        }
        world[pacman.y][pacman.x] = 0;
        displayWorld();
        displayScore();
    } 

    // console.log(e.keyCode);
    displayPacman();
};