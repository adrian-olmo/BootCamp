class Vehiculo {

    constructor(marca, velocidad, matricula, ruedas, puertas, años) {
        this.marca = marca;
        this.velocidad = velocidad;
        this.matricula = matricula;
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.años = años
    }

    correr() {
        return this.velocidad += 10;
    }

    frenar() {
        return this.velocidad = 0;
    }

    aparcar() {
        console.log('Aparcao!');
    }

}

class Coche extends Vehiculo {
    constructor(marca, velocidad, matricula, ruedas, puertas, años) {
        super(marca, velocidad, matricula, ruedas, puertas, años);
        this.consumo = 'Diesel';
    }
}

class Moto extends Vehiculo {
    constructor(marca, velocidad, matricula, ruedas, puertas, años) {
        super(marca, velocidad, matricula, ruedas, puertas, años);
    }
}
class Patin extends Vehiculo {
    constructor(marca, velocidad, matricula, ruedas, puertas, años) {
        super(marca, velocidad, matricula, ruedas, puertas, años);
    }
}


const ferrari = new Coche('Ferrari', 150, '1111AAA', 4, 4, 5);
console.log(ferrari);

const yamaha = new Moto('Yamaha', 80, '2222BBB', 2, 0, 10);
console.log(yamaha);

const skate = new Patin('MonoSkate', 20, 0, 2, 0, 20);
console.log(skate);