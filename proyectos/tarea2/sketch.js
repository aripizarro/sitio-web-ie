let numCirculos = 60; // Número de círculos
let radio = 40; // Radio de los círculos
let velocidad = 0.05; // Velocidad de la animación
let anguloOffset = 0; // Ángulo inicial para la onda


function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(160);
  
    let spacing = width / numCirculos; // Espaciado entre los círculos

  for (let i = 0; i < numCirculos; i++) {
    let x = i * spacing; // Posición x de cada círculo
    let y = height / 2 + sin(anguloOffset + i * 0.5) * 100; // Movimiento ondulado

    // Cambia el color de los círculos
    let r = map(i, 8, numCirculos, 0, 300);
    let g = map(i, 0, numCirculos, 30, 9);
    let b = 300; // Color constante en azul

    fill(r, g, b);
    noStroke(); // Sin borde para los círculos
    ellipse(x, y, radio, radio ); // Dibuja el círculo
  }

  anguloOffset += velocidad; // Actualiza el ángulo para la animación

  if (anguloOffset > TWO_PI) {
    anguloOffset = 0; // Reinicia el ángulo después de una vuelta completa
  }   
    
}