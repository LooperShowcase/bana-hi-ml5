let player;

let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];

let wordclassifier;

function preload() {
  bgImage = loadImage("background.jpg");
  playerImage = loadImage("player.png");
  obstacleImage = loadImage("obstacle.png");

  let options = {
    probanilityThreshold: 0.85,
  };
  wordclassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(700, 700);
  player = new Player();
  wordclassifier.classify(heardword);
}
function heardword(error, results) {
  if (results[0].label === "up") player.jump();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bgImage);
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  player.show();
  player.move();

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs) == true) {
      textSize(100);
      fill(255);
      text("Game Over", 150, 150);
      noLoop();
    }
  }
}
