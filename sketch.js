
///////////////////////
let video;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //si hacen una version nueva del video y es .mp4, cambiar el nombre en la linea de  (recordar nomas de 25MB el video)
  video = createVideo(['https://tarcisiopirotta.github.io/video_mouse/data/video.mov']);  // Asegúrate de que el archivo de video está en la misma carpeta o proporciona la URL correcta
  video.hide(); // Oculta el elemento de video HTML
}

function draw() {
  background(0);
  let mouseSpeed = abs((mouseX - pmouseX)+(mouseY - pmouseY));//hago una suma de la velocidad del mouse en ambos ejes
  if (mouseSpeed>1){//si el mouse se mueve defino la velocidad de reproduccion en 1
    video.speed(1);
  }else{//sino velocidad en 0, o sea el video se detiene
    video.speed(0);
  }
  // Redimensionar el video al tamaño de la ventana
  if (video) {
    image(video, 0, 0, width, height);
  }
}

function mousePressed() {

    video.loop();  // Reproducir el video en bucle
    //fullscreen(true);  // Hacer pantalla completa
  
}
function touchStarted() {
     video.loop();  // Reproducir el video en bucle
    //fullscreen(true);  // Hacer pantalla completa
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
