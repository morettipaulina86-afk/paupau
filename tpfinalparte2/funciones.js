function inicio_() {
  image(pantallaInicio, -70, 0, width + 150, height);

  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(tipografia);
  text("FOOD  AND  RADIATION", width / 2, 50);
  
  ancho = 200;
  alto = 40;
  x = width / 2;
  y = 300;
  
  if (mouseX > x - ancho/2 &&
    mouseX < x + ancho/2 &&
    mouseY > y - alto/2 &&
    mouseY < y + alto/2) {
    if ((frameCount % 20) < 10) {
      fill("#FF0505");
    } else {
      fill("#CBAB06");
    }
  } else {
    fill("#CBAB06");
  }
  
  textSize(50);
  text("JUGAR", x, y);
  image(cursorImg, mouseX, mouseY, 64, 64);
}

function fondo_() {
  image(fondo[0], -70, 0, width + 150, height);
}

function homero_() {
  // Mover con flechas (velocidad 10)
  if (keyIsDown(LEFT_ARROW)) { 
    posX -= 10; 
  }
  if (keyIsDown(RIGHT_ARROW)) {
    posX += 10; 
  }
  
  // Limitar para que homero no salga del canvas
  if (posX < 0) { 
    posX = 0;
  }
  if (posX > width - 150) {
    posX = width - 150;
  }

  // Dibujar Homero en la posición actual
  image(homero[0], posX, 200, 150, 200);
}

function mostrarPuntaje() {
  image(vidaImg, 20, 20, 40, 40);

  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(30);
  textAlign(LEFT, TOP);
  text(": " + contador, 65, 22);
}
