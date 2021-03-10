/* Contador */

window.onload = updateClock;
let totalTime = 100;

function updateClock() {
    document.getElementById('countdown').innerHTML = totalTime;
    if (totalTime == 0) {
        alert('Final');
    } else {
        totalTime -= 1;
        setTimeout('updateClock()', 1000);
    }
}


/* Ocultar Pantalla Seleccion personajes*/
function ocultarPantalla() {

    let mostrar = document.getElementById('show');
    if (mostrar.style.display === 'none') {
        mostrar.style.display = 'block';
    } else {
        mostrar.style.display = 'none';
    }

}


/* Funcion de disparo */