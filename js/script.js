const drawer = (function (context) {
  context.init = function () {
    context.mazeArray = [
      //Game array init
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
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
    context.charXCurrHeroPosition = 0; //Current Hero possition by X
    context.charYCurrHeroPosition = 0; //Current Hero possition by Y
    context.canvas = document.getElementById("MyCanvas"); // getting canvas
    canvas.width = 600; //our enitial canvas width in px
    canvas.height = 600; //our enitial canvas height in px
    context.squareSize = 60; //our enitial square size in px
    context.boardTopx = 10; //our padding from top x
    context.boardTopy = 10; // our padding from top y
    context.ctx = canvas.getContext("2d"); //getting 2d context of canvas
  };
  context.initGrid = function () {
    //Initiating game grid(maze)
    for (let i = 0; i < context.mazeArray.length; i++) {
      for (let j = 0; j < context.mazeArray[i].length; j++) {
        let mazeElement = context.mazeArray[i][j];
        if (mazeElement === 0) {
          //If maze element = 0 then yellow color,else black
          ctx.fillStyle = "yellow";
        } else {
          ctx.fillStyle = "black";
        }
        if (
          //If maze element matches the Hero possition,then color = green
          i == context.charXCurrHeroPosition &&
          j == context.charYCurrHeroPosition
        ) {
          ctx.fillStyle = "green";
        }
        drawRectangle(i, j, squareSize); //redraw rectangle
      }
    }
  };

  context.drawRectangle = (i, j, squareSize) => {
    let xOffset = boardTopy + i * squareSize;
    let yOffset = boardTopx + j * squareSize;
    ctx.fillRect(xOffset, yOffset, squareSize, squareSize);
  };

  window.onkeypress = function (e) {
    //Movement functionality
    var key = e.key;
    switch (key) {
      case "w": {
        if (charYCurrHeroPosition === 0) {
          return;
        }
        if (
          checkWalls(
            context.charXCurrHeroPosition,
            context.charYCurrHeroPosition - 1
          )
        ) {
          charYCurrHeroPosition--;
          context.initGrid(); //Refresh the grid
          checIfWins(); //Checks if player wins
        }
        break;
      }
      case "a": {
        if (context.charXCurrHeroPosition === 0) {
          return;
        }
        if (
          checkWalls(
            context.charXCurrHeroPosition - 1,
            context.charYCurrHeroPosition
          )
        ) {
          charXCurrHeroPosition--;
          context.initGrid(); //Refresh the grid
          checIfWins(); //Checks if player wins
        }
        break;
      }
      case "s": {
        if (context.charYCurrHeroPosition === context.mazeArray.length - 1) {
          return;
        }
        if (
          checkWalls(
            context.charXCurrHeroPosition,
            context.charYCurrHeroPosition + 1
          )
        ) {
          context.charYCurrHeroPosition++;
          context.initGrid(); //Refresh the grid
          checIfWins(); //Checks if player wins
        }
        break;
      }
      case "d": {
        if (context.charXCurrHeroPosition === context.mazeArray.length - 1) {
          return;
        }
        if (
          checkWalls(
            context.charXCurrHeroPosition + 1,
            context.charYCurrHeroPosition
          )
        ) {
          context.charXCurrHeroPosition++;
          context.initGrid(); //Refresh the grid
          checIfWins(); //Checks if player wins
        }
        break;
      }
    }
  };

  context.checkWalls = function (x, y) {
    //checking if the next move will contain wall(maze element wiht index =1)
    return context.mazeArray[x][y] == 1;
  };

  context,
    (checIfWins = function () {
      let winningXCondition = 9; //winnign tile by X
      let winningYCondition = 9; //winning tile by Y
      if (
        context.charXCurrHeroPosition == winningXCondition &&
        context.charYCurrHeroPosition == winningYCondition
      ) {
        alert("You have won!!");
      }
    });
  return context;
})(this);
