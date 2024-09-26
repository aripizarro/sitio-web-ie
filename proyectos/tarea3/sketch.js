function setup() {
  createCanvas(500, 500);
   angleMode(DEGREES); 
  
   pixelDensity(4)
}

function draw() {
  background("white");
  
   translate(width / 2, height /2); 
  

  for (let n = 0; n < 4; n++) {
    
  
    for (let i = 0; i < 360; i += 0.5) {
      
      let radio = map(sin(i * 4 + frameCount), -1, 1, 10, 150);
      
      
      let x = radio * cos(i);
      let y = radio * sin(i);
      
      fill("black"); 
      circle(x, y,15); 
    }
    
   
    rotate(frameCount / 2);
  }
  
    let r = map(sin(frameCount), -1,1,92, 255); 
    let g = map(sin(frameCount), -1, 1, 92, 184);
    let b = map(sin(frameCount),-1, 1, 213, 255); 

  stroke(r, g, b);
  

}