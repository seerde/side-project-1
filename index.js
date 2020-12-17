let gameObj = {
  gameMap: [0, 0, 0, 0, 0],
  winIndex: 0,
  prePosition: -1,
  currentPosition: 0,
  score: 0,
  level: 1,
};

$("#testing").on("click", () => {
  generateTargets();
  drawFirstTarget();
  setInterval(correctTarget, 2000);
});
$(".gameButton").on("click", () => {
  if (gameObj.currentPosition == gameObj.winIndex) {
    console.log("Won!");
  } else {
    console.log("Lost!");
  }
});

const generateTargets = () => {
  let winIndex = Math.floor(Math.random() * gameObj.gameMap.length);
  gameObj.gameMap[winIndex] = 1;
  gameObj.winIndex = winIndex;
  $(".Layers").each((i, e) => {
    let color = i == winIndex ? "green" : "darkgray";
    let graphic = $(`<div class='graphic' id='${i}${i}'></div>`);
    graphic.css("left", `${Math.random() * 300 + 10}px`);
    $(`#${e.id}`).css("background-color", color);
    $(`#${e.id}`).append(graphic);
  });
  // gameObj.gameMap = [0, 0, 0, 0, 0];
};

const correctTarget = () => {
  if (gameObj.currentPosition == 0) {
    gameObj.prePosition = 0;
    gameObj.currentPosition = 1;
  } else if (gameObj.currentPosition == 4) {
    gameObj.prePosition = 4;
    gameObj.currentPosition = 3;
  } else if (gameObj.currentPosition > gameObj.prePosition) {
    gameObj.prePosition = gameObj.currentPosition;
    gameObj.currentPosition++;
  } else if (gameObj.currentPosition < gameObj.prePosition) {
    gameObj.prePosition = gameObj.currentPosition;
    gameObj.currentPosition--;
  }
  $(".Layers").each((i, e) => {
    if (i == gameObj.prePosition) {
      $(`#${i}${i}`).css("background-color", "darkgray");
    }
    if (i == gameObj.currentPosition) {
      $(`#${i}${i}`).css("background-color", "red");
    }
  });
};
const drawFirstTarget = () => {
  gameObj.currentPosition = Math.floor(Math.random() * gameObj.gameMap.length);
  gameObj.prePosition = gameObj.currentPosition - 1;
  $(`#${gameObj.currentPosition}${gameObj.currentPosition}`).css(
    "background-color",
    "red"
  );
};

generateTargets();
drawFirstTarget();
setInterval(correctTarget, 400);