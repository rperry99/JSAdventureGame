let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let downButton = document.getElementById("down");
let upButton = document.getElementById("up");

let playerSpace = 1;
MakeActive(playerSpace);

function MakeActive(nextSpace) {
  let boxesNodeList = document.querySelectorAll(".game div");
  for (let i = 1; i <= boxesNodeList.length; i++) {
    if (i === nextSpace) {
      boxesNodeList[nextSpace - 1].classList.add("active");
    } else {
      boxesNodeList[i - 1].setAttribute("class", "tile");
    }
  }
  console.log(nextSpace);
}

//When the user presses the left button
function MoveLeft() {
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
