let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let downButton = document.getElementById("down");
let upButton = document.getElementById("up");

let playerSpace = 1;
MakeActive(playerSpace);

function MakeActive(nextSpace) {
  let boxesNodeList = document.querySelectorAll(".game div");
  for (let i = 1; i <= boxesNodeList.length + 1; i++) {
    // boxesNodeList[i].classList.add("active");
    if (i === nextSpace) {
      boxesNodeList[nextSpace - 1].classList.add("active");
    } else {
      boxesNodeList[i - 1].setAttribute("class", "tile");
    }
  }
  console.log(nextSpace);
}

function MoveLeft() {
  if (playerSpace != 1 || playerSpace != 4 || playerSpace != 7) {
    playerSpace -= 1;
    MakeActive(playerSpace);
  }
}
function MoveUp() {
  if (playerSpace != 1 || playerSpace != 2 || playerSpace != 3) {
    playerSpace -= 3;
    MakeActive(playerSpace);
  }
}
function MoveDown() {
  if (playerSpace != 7 || playerSpace != 8 || playerSpace != 9) {
    playerSpace += 3;
    MakeActive(playerSpace);
  }
}
function MoveRight() {
  if (playerSpace != 3 || playerSpace != 6 || playerSpace != 9) {
    playerSpace += 1;
    MakeActive(playerSpace);
  }
}
