var ship;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
}

function draw() {
  background(0);
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}

function keyReleased()  {
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if (keyCode == 68) {
    ship.setRotation(0.1);
  } else if (keyCode == 65) {
    ship.setRotation(-0.1);
  } else if (keyCode == 87) {
    ship.boosting(true);
  }
}
