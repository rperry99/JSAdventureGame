// Variables to grab the elements
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let downButton = document.getElementById("down");
let upButton = document.getElementById("up");
let gameCanvas = document.getElementById("game");

// The player's current (starting) space and initate the player
let playerSpace = 1;

// The number of tiles on the map
const tiles = 64;

// Get the square root to make the width of the game dynamic so it's always a square
let tilesPerRow = Math.sqrt(tiles);

// Create the board
for (let i = 1; i <= tiles; i++) {
  var tile = document.createElement("div");
  tile.innerHTML = i;
  gameCanvas.appendChild(tile);
}

// Create the active player
MakeActive(playerSpace);

// get the width of the tile and change the width of the game canvas to make sure it's a square.
let singleTile = document.querySelector(".tile");
let tileWidth = singleTile.offsetWidth - 2;
// gameWidth = the width of a row of tiles plus the extra space added by the border
let gameWidth = tileWidth * tilesPerRow + tilesPerRow * 2;
gameCanvas.style.width = `${gameWidth}px`;

function MakeActive(nextSpace) {
  let boxesNodeList = document.querySelectorAll("#game div");
  for (let i = 1; i <= boxesNodeList.length; i++) {
    if (i === nextSpace) {
      boxesNodeList[nextSpace - 1].classList.add("active");
      boxesNodeList[nextSpace - 1].classList.add("tile");
    } else {
      boxesNodeList[i - 1].setAttribute("class", "tile");
    }
  }
  console.log(nextSpace);
}

//When the user presses the left button
function MoveLeft() {
  //If the player is on the far right already, don't move (they hit a wall), else, move.
  if (playerSpace === 1 || playerSpace === 4 || playerSpace === 7) {
    return;
  } else {
    playerSpace -= 1;
    MakeActive(playerSpace);
  }
}
//When the user presses the up button
function MoveUp() {
  if (playerSpace === 1 || playerSpace === 2 || playerSpace === 3) {
    return;
  } else {
    playerSpace -= 3;
    MakeActive(playerSpace);
  }
}
//When the user presses the down button
function MoveDown() {
  if (playerSpace === 7 || playerSpace === 8 || playerSpace === 9) {
    return;
  } else {
    playerSpace += 3;
    MakeActive(playerSpace);
  }
}
//When the user presses the right button
function MoveRight() {
  if (playerSpace === 3 || playerSpace === 6 || playerSpace === 9) {
    return;
  } else {
    playerSpace += 1;
    MakeActive(playerSpace);
  }
}
