let pantallas = [];
let textos = [];
let sonidos = [];
let transiciones = [];
let tipografia;
let mensaje;
let contador;
let ancho, alto, size, x, y;
let estado = 0; 
let tiempo = 0;
let cursorImg;

function botones(x_, y_, w_, h_) {
  return mouseX > x_ - w_/2 &&
    mouseX < x_ + w_/2 &&
    mouseY > y_ - h_/2 &&
    mouseY < y_ + h_/2;
}

function reproducirEfecto() {
  if (sonidos[1] && sonidos[1].isLoaded()) {
    sonidos[1].stop();
    sonidos[1].play();
  }
}

function preload() {
  cursorImg = loadImage("data/cursor/cursor.png");

  
  for (let i = 0; i < 19; i++) {
    let pantalla = nf(i, 3); 
    pantallas[i] = loadImage("data/pantallas/" + pantalla + ".jpg");
  }

  tipografia = loadFont("data/tipografias/simpson.ttf");
  mensaje = loadFont("data/tipografias/mensaje.ttf");

  for (let j = 0; j < 3; j++) {
    let texto = nf(j, 2);
    textos[j] = loadImage("data/textos/" + texto + ".png");
  }
  for (let k = 0; k < 17; k++) {
    let transicion = nf(k, 4);
    transiciones[k] = loadImage("data/transicion/" + transicion + ".png");
  }
  for (let l = 0; l < 3; l++) {
    let sonido = nf(l, 1);
    sonidos[l] = loadSound("data/sonidos/" + sonido + ".mp3");
  }
}

function setup() {
  createCanvas(800, 450);
  noCursor(); 
  contador = 0;
}

function draw() {
  if (estado === 0) {
    menu();
  } else if (estado === 1) {
    creditos();
  } else if (estado === 2) {
    pantallaUno();
  } else if (estado === 3) {
    pantallaDos();
  } else if (estado === 4) {
    pantallaTres();
  } else if (estado === 5) {
    pantallaCuatro();
  } else if (estado === 6) {
    pantallaCinco();
  } else if (estado === 7) {
    pantallaSeis();
  } else if (estado === 8) {
    pantallaSiete();
  } else if (estado === 9) {
    pantallaOcho();
  } else if (estado === 10) {
    pantallaNueve();
  } else if (estado === 11) {
    pantallaDiez();
  } else if (estado === 12) {
    pantallaOnce();
  } else if (estado === 13) {
    pantallaDoce();
  } else if (estado === 14) {
    pantallaTrece(); 
  } else if (estado === 15) {
    pantallaCatorce(); // Final: Quedarse en casa
  } else if (estado === 16) {
    pantallaQuince();
  } else if (estado === 17) {
    pantallaDieciseis();
  } else if (estado === 18) {
    pantallaDiecisiete();
  } else if (estado === 19) {
    pantallaDieciocho(); // Opinión en la taberna
  } 
  // --- TRAMO: CAMINO DE HABLARLE A MINDY ---
  else if (estado === 20) {
    pantallaHablarMindy1(); 
  } else if (estado === 21) {
    pantallaHablarMindy2(); 
  } else if (estado === 22) {
    pantallaHablarMindy3(); 
  } else if (estado === 23) {
    pantallaInvitacionCafe(); 
  }
  // --- NUEVO FINAL: HOMERO BEBIENDO (017.jpg) ---
  else if (estado === 24) {
    pantallaFinalBebedor();
  }
  // --- NUEVA RUTA: ESPERAR A MINDY ---
  else if (estado === 25) {
    pantallaEsperarMindy1();
  } else if (estado === 26) {
    pantallaEsperarMindy2();
  } else if (estado === 27) {
    pantallaEsperarMindy3();
  } else if (estado === 28) {
    pantallaFinalEsperarMindy();
  }

  image(cursorImg, mouseX, mouseY, 64, 64); 
}

function mousePressed() {
  if (estado == 0) {
    if (botones(width/2, 300, 200, 40)) {
      estado = 2;
      contador = 0;
      if (sonidos[0].isLoaded() && !sonidos[0].isPlaying()) {
        sonidos[0].setVolume(0.2);
        sonidos[0].loop();
      }
      reproducirEfecto();
    }
    if (botones(width/2, 350, 200, 40)) {
      estado = 1;
      contador = 0;
      if (sonidos[0].isPlaying()) sonidos[0].stop();
      if (sonidos[2].isLoaded() && !sonidos[2].isPlaying()) {
        sonidos[2].setVolume(0.5);
        sonidos[2].loop();
      }
      reproducirEfecto();
    }
  }

  else if (estado == 1) {
    if (botones(700, 400, 200, 40)) {
      estado = 0;
      contador = 0;
      if (sonidos[2].isPlaying()) sonidos[2].stop();
      reproducirEfecto();
    }
  }

  else if (estado == 3) { estado = 4; contador = 0; }
  else if (estado == 4) { estado = 5; contador = 0; }
  else if (estado == 5) { estado = 6; contador = 0; }
  else if (estado == 6) { estado = 7; contador = 0; }
  else if (estado == 7) { estado = 8; contador = 0; }
  else if (estado == 8) { estado = 9; contador = 0; }
  else if (estado == 9) { estado = 10; contador = 0; }

  else if (estado == 10) {
    if (botones(220, 350, 300, 100)) { estado = 11; reproducirEfecto(); }
    if (botones(580, 350, 300, 100)) { estado = 12; reproducirEfecto(); }
  } 
  else if (estado == 11) { estado = 13; contador = 0; }
  else if (estado == 12) { estado = 14; contador = 0; } 
  
  else if (estado == 13) {
    if (botones(220, 350, 300, 100)) { estado = 15; reproducirEfecto(); }
    if (botones(580, 350, 300, 100)) { estado = 16; contador = 0; tiempo = 0; reproducirEfecto(); }
  } 

  // --- DECISIÓN EN PANTALLA TRECE (Hablarle vs Esperar) ---
  else if (estado == 14) {
    if (botones(220, 350, 300, 100)) {
      estado = 20; // Hablarle a Mindy
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
    if (botones(580, 350, 300, 100)) {
      estado = 25; //  Esperar que Mindy lo vea
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
  }

  else if (estado == 15) {
    estado = 0;
    contador = 0;
  } 
  else if (estado == 16) { estado = 17; contador = 0; }
  else if (estado == 17) { estado = 18; contador = 0; }
  else if (estado == 18) { estado = 19; contador = 0; }
  
  // --- OPINIÓN EN LA TABERNA (ESTADO 19) ---
  else if (estado == 19) {
    if (botones(220, 350, 300, 100)) {
      estado = 14; 
      contador = 0;
      reproducirEfecto();
    }
    else if (botones(580, 350, 300, 100)) {
      estado = 24; 
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
  }

  // --- CLIC EN EL NUEVO FINAL BEBEDOR ---
  else if (estado == 24) {
    estado = 0;
    contador = 0;
    reproducirEfecto();
  }

  // --- CONTROLES DE CLIC PARA EL TRAMO DE HABLARLE A MINDY ---
  else if (estado == 20) {
    estado = 21;
    contador = 0;
    reproducirEfecto();
  }
  else if (estado == 21) {
    estado = 22;
    contador = 0;
    reproducirEfecto();
  }
  else if (estado == 22) {
    estado = 23;
    contador = 0;
    reproducirEfecto();
  }
  else if (estado == 23) {
    if (botones(220, 350, 300, 100)) {
      reproducirEfecto();
    }
    else if (botones(580, 350, 300, 100)) {
      estado = 15; 
      contador = 0;
      reproducirEfecto();
    }
  }

  
  else if (estado == 25) {
    estado = 26;
    contador = 0;
    reproducirEfecto();
  }
  else if (estado == 26) {
    estado = 27;
    contador = 0;
    reproducirEfecto();
  }
  else if (estado == 27) {
    estado = 28;
    contador = 0;
    reproducirEfecto();
  }
  else if (estado == 28) {
    estado = 0;
    contador = 0;
    reproducirEfecto();
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    estado = 0;
    contador = 0;
    tiempo = 0;
    if (sonidos[0].isPlaying()) {
      sonidos[0].stop();
    }
  }

  if (key === 'S' || key === 's') {
    if (sonidos[0].isPlaying()) {
      sonidos[0].stop();   
    } else {
      sonidos[0].setVolume(0.2);
      sonidos[0].loop();   
    }
  }
}
