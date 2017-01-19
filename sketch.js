var palettesize = 55;
var platetteGutter;

var redChalk, orangeChalk, yellowChalk, greenChalk, blueChalk, purpleChalk;
var eraser;
var eraseAll;
var eraseOn = false;

var colorChalk = ["#DC4266", "#EB9554", "#D5C561", "#86C0AB", "#5BADD8", "#8191C9"]




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  strokeJoin(ROUND)
  strokeCap(ROUND)

  stroke(colorChalk[0]);

  redChalk = select('#red');
  redChalk.mousePressed(redColor);

  orangeChalk = select('#orange');
  orangeChalk.mousePressed(orangeColor);

  yellowChalk = select('#yellow');
  yellowChalk.mousePressed(yellowColor);

  greenChalk = select('#green');
  greenChalk.mousePressed(greenColor);

  blueChalk = select('#blue');
  blueChalk.mousePressed(blueColor);

  purpleChalk = select('#purple');
  purpleChalk.mousePressed(purpleColor);

  eraser = select('#eraser');
  eraser.mousePressed(erase);

  eraseAll = select('#erase-all');
  eraseAll.mousePressed(cleanAll);
}

function draw() {
}

function mouseDragged() {
  if ((mouseX > palettesize * 2.5) && (mouseIsPressed)) {
    if (!eraseOn) {
      strokeWeight(4)
      line(mouseX, mouseY, pmouseX, pmouseY);
    } else {
      fill(0, 0, 0, 100);
      noStroke();
      ellipse(mouseX, mouseY, 100, 100);
    }
  }
}

function touchMoved() {
  // if ((mouseX > palettesize * 2.5) && (mouseIsPressed)) {
    if (!eraseOn) {
      strokeWeight(4)
      line(mouseX, mouseY, pmouseX, pmouseY);
      return false;
    } else {
      fill(0, 0, 0, 100);
      noStroke();
      ellipse(mouseX, mouseY, 100, 100);
      return false;
    }
  // }
}


function redColor() {
  eraseOn = false;
  stroke(colorChalk[0]);
}

function orangeColor() {
  eraseOn = false;
  stroke(colorChalk[1]);
}

function yellowColor() {
  eraseOn = false;
  stroke(colorChalk[2]);
}

function greenColor() {
  eraseOn = false;
  stroke(colorChalk[3]);
}

function blueColor() {
  eraseOn = false;
  stroke(colorChalk[4]);
}

function purpleColor() {
  eraseOn = false;
  stroke(colorChalk[5]);
}

function erase() {
  eraseOn = true;
}

function cleanAll() {
  eraseOn = false;
  clear();
}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
