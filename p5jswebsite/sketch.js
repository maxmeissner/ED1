function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(5);
  var randomRed = random (0,255);
  background (randomRed,255,255);
 stroke(100,178,255);
  fill(100,100,100);
  frameRate(5);

}

function draw() {
  
  var margin = 40;
  var width = innerWidth - 2*margin;
  var height =innerWidth - 2*margin;
  var numSquares = 10;
  var sideLen = width/numSquares;
  var space = random(1,2);
  var shift = random (20,25);
  
  translate(margin,margin);
  for(var y=0;y<height; y=y+sideLen){
    for (var x=0; x<width; x=x+sideLen){
      fill (x,255,y);
      quad (x + space + random(-shift,shift),y + space + random (-shift, shift),
            x + sideLen - space + random(-shift,shift), y + space + random(-shift, shift),
            x + sideLen - space + random (-shift,shift), y + sideLen - space + random(-shift, shift),
            x + space + random(-shift, shift), y + sideLen - space + random (-shift, shift));
      
    quad (x,y, x+sideLen,y, x+sideLen,y+sideLen, x, y+sideLen);
    }
  }
}
