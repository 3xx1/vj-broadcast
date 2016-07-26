var sticky_size = 200;
var sticky_padding = 20;
var stickies = [
  {'x': 100, 'y': 300, 'text': 'hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world'},
  {'x': 456, 'y': 360, 'text': 'hell world'},
  {'x': 100, 'y': 800, 'text': 'hello Chad'}
];

function setup() {
  createCanvas(1000, 1000);
  noStroke();
}

function draw() {
  for (var i=0; i<stickies.length; i++) {
    fill(225, 255, 30);
    rect(stickies[i].x, stickies[i].y, sticky_size, sticky_size);
    fill(0);
    text(stickies[i].text, stickies[i].x + sticky_padding, stickies[i].y + sticky_padding, sticky_size - sticky_padding, sticky_size - sticky_padding);
  }
}
