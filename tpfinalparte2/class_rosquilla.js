
class Rosquilla {
  constructor(rutaImagen) {
    this.x = random(50, width - 50);
    this.y = -50;
    this.velocidad = random(3, 6);
    this.img = loadImage(rutaImagen);
    this.tamano = 40;
  }

  // Mueve la rosquilla hacia abajo
  actualizar() {
    this.y += this.velocidad;

    // Si pasa de largo por abajo, se reinicia arriba
    if (this.y > height) {
      this.reiniciar();
    }
  }

  // Dibuja la rosquilla en pantalla
  mostrar() {
    image(this.img, this.x, this.y, this.tamano, this.tamano);
  }

  // Comprueba si choca con la boca de Homero
  verificarColision(homeroX) {
    let bocaX = homeroX + 90; 
    let bocaY = 240;       

    let d = dist(this.x + this.tamano/2, this.y + this.tamano/2, bocaX, bocaY);
    
    if (d < 35) {
      contador += 10; // Suma 10 puntos/vida
      this.reiniciar();
    }
  }

  // Vuelve a colocar la rosquilla arriba en otra posición aleatoria
  reiniciar() {
    this.y = -50;
    this.x = random(50, width - 50);
    this.velocidad = random(3, 6);
  }
}
