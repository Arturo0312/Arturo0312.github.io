window.onload = function(){ 
    
    const IMAGENES = [
        'img/1.jpg','img/2.jpg','img/3.jpg'];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#Anterior');
    let $botonAvanzar = document.querySelector('#Siguiente');
    let $imagen = document.querySelector('#imagen');
    let intervalo;

    
    var timer = null;
    



  
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    function start(){
        renderizarImagen();
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        document.getElementById("imagen").onmouseover=function(){
                clearInterval(intervalo);
        };
        document.getElementById("imagen").onmouseout=function(){
            start();
        }
    }
  
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
   
    start();
}
