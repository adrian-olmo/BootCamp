class Megaman {

    constructor(nombre, salud, icono, ataque, poseVictoriaDerecha, poseVictoriaIzquierda) {
        this.nombre = nombre;
        this.salud = salud;
        this.icono = icono;
        this.ataque = ataque;
        this.poseVictoriaDerecha = poseVictoriaDerecha;
        this.poseVictoriaIzquierda = poseVictoriaIzquierda;
    }


    atacar() {
        danio = Math.floor(Math.random * 10);
    }

}

// Megaman Azul
let blueMegaman = new Megaman('Original Megaman', 150, 'img/personajes/J1azul/J1Dcha.png', danio, 'img/personajes/J1azul/saltoAtaqueDcha.png', 'img/personajes/J1azul/saltoAtaqueIzq.png');

//Megaman Morado
let purpleMegaman = new Megaman('Invert Megaman', 150, 'img/personajes/J1morado/J1Dcha.png', danio, 'img/personajes/J1morado/saltoAtaqueDcha.png', 'img/personajes/J1morado/saltoAtaqueizq.png');

//Megaman Verde
let redMegaman = new Megaman('Bad Megaman', 150, 'img/personajes/J1verde/J1Dcha.png', danio, 'img/personajes/J1verde/saltoAtaqueDcha.png', 'img/personajes/J1verde/saltoAtaqueizq.png');

//Megaman Rojo
let redMegaman = new Megaman('Bad Megaman', 150, 'img/personajes/J1rojo/J1Dcha.png', danio, 'img/personajes/J1rojo/saltoAtaqueDcha.png', 'img/personajes/J1rojo/saltoAtaqueizq.png');