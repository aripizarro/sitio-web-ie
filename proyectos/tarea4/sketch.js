let dmax = 100; 

function setup() {
  createCanvas(400, 400);
  background("black");
 
}

function draw() {
  background("black");
  let diametro = map(mouseX, 4, width, 20, dmax); 
  drawCircle(width / 2, height / 2, diametro);
}

function drawCircle(x, y, diametro) {
  if (diametro > 5) {
    ellipse(x, y, diametro, diametro); 
    drawCircle(x + diametro / 1, y, diametro * 0.5); 
    drawCircle(x - diametro / 1, y, diametro * 0.5);
    drawCircle(x, y + diametro / 1, diametro * 0.5); 
    drawCircle(x, y - diametro / 1, diametro * 0.5); 

 stroke(153, 134, 255)
  fill("black")
   
  }
}

function mouseMoved() {
  redraw(); 

}