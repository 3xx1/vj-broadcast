var mic, fft;

function setup() {
  createCanvas($(window).width(), $(window).height());
  noFill();
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  background(0);
}

function draw() {
  
  var spectrum = fft.analyze();
  stroke(random(0,frameCount%255), random(130,170), random(130,170), 3);
  beginShape();
  for (i = 0; i<spectrum.length; i++) {
    vertex((width/2)*(1+cos(2*Math.PI*(frameCount/5000))) + map(spectrum[i], 0, 255, 0, 1000)*cos(4*Math.PI*(i/spectrum.length)), (height/2)*(1+sin(2*Math.PI*(frameCount/5000))) + map(spectrum[i], 0, 255, 0, 1000)*sin(4*Math.PI*(i/spectrum.length)) );
  }
  endShape();
}
