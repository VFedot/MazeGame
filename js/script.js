//0=Walking path
//1=Wall
//10=Player



const maze = [
  [2, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
];

let charXCurrHeroPosition=0;
let charYCurrHeroPosition=0;


const canvas = document.getElementById("MyCanvas"); // getting canvas
canvas.width = 1000; //our enitial canvas width in px
canvas.height = 1000; //our enitial canvas height in px
const squareSize = 100; //our enitial square size in px
const boardTopx = 10; //our padding from top x
const boardTopy = 10; // our padding from top y
var ctx = canvas.getContext("2d"); //getting 2d context of canvas
buildMaze();

function buildMaze() {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
       let mazeElement = maze[i][j];

      if(mazeElement === 0){
             ctx.fillStyle = "yellow";
      }else{
             ctx.fillStyle = "black";
      }
       if(i == charXCurrHeroPosition && j == charYCurrHeroPosition){
              ctx.fillStyle = "green"
       }
      drawRectangle(i, j, squareSize);
    }
  }
}

function drawRectangle(i, j, squareSize) {
  let xOffset = boardTopy + i * squareSize;
  let yOffset = boardTopx + j * squareSize;
  ctx.fillRect(xOffset, yOffset, squareSize, squareSize);
}


window.onkeypress = function(e){
       var key = e.key;
       switch(key){
       case "w": {
              if(charYCurrHeroPosition === 0){
                     return;
              }
              if(checkWalls(charYCurrHeroPosition-1,charXCurrHeroPosition){
                     charYCurrHeroPosition-=1;
              }
              
              
              break;
       }
       case  "a": {
              if(charXCurrHeroPosition === 0){
                     return;
              }
              if(maze[charYCurrHeroPosition,charXCurrHeroPosition-1] ==1){
                     charXCurrHeroPosition--;
                     buildMaze();
                     }

              break;
       }
       case "s": {
              if(charYCurrHeroPosition === maze.length-1){
                     return;
              }
              if(maze[charYCurrHeroPosition+1,charXCurrHeroPosition] ==1){
                     charYCurrHeroPosition++;
                     buildMaze();
                     }
              break;
       }
       case "d": {
              if(charXCurrHeroPosition === maze.length-1){
                     return;
              }
              if(maze[charYCurrHeroPosition,charXCurrHeroPosition+1] ==1){
                     charXCurrHeroPosition++;
                                   buildMaze();
                     }

              break;
       }
}
}

function checkWalls(x,y){
       return maze[x][y]==1;
}
