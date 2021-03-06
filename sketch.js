var palettesize = 55;
var platetteGutter;

var redChalk, orangeChalk, yellowChalk, greenChalk, blueChalk, purpleChalk, whiteChalk;
var eraser;
var eraseAll;
var eraseOn = false;

var colorChalk = ["#DC4266", "#EB9554", "#dbc115", "#86C0AB", "#5BADD8", "#8191C9", "#FFFFFF"]




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  strokeJoin(ROUND)
  strokeCap(ROUND)

  stroke(colorChalk[6]);

  whiteChalk = select('#white');
  whiteChalk.mousePressed(whiteColor);

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


function touchMoved() {
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
}

function whiteColor() {
  eraseOn = false;
  stroke(colorChalk[6]);
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
