//achtung! the most beautiful and efficient code ahead, viewer discretion is advised
let a = 27;
let b = 0;
let xlevel = 0;
let ylevel = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(153, 204, 53);
  fill (0,0,0);
  textSize(42);
  textAlign(LEFT);
  text('brat', b, a);
  //square(b, a, 60);
    if (xlevel == 0)
      {a+=1;}
    else if (xlevel == 1)
      {a-=1;}
    if (ylevel == 0)
      {b+=1;}
    else if (ylevel == 1)
      {b-=1;}
  
  
  if (a >= windowHeight)
    {xlevel = 1;}
  else if (a <= 0 + 27)
    {xlevel = 0;}
  if (b >= windowWidth - 67)
    {ylevel = 1;}
  else if (b <= 0)
    {ylevel = 0;}


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
