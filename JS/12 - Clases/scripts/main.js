class Coche {

    constructor(nombre, marca, velocidad) {
        this.nombre = nombre;
        this.marca = marca;
        this.velocidad = velocidad;
    }

    acelerar() {
        return this.velocidad += 30;
    }

    frenar() {
        return this.velocidad = 0;
    }

}



let ferrari = new Coche('Ferrari', 'rojo', 40);
console.log(ferrari);
console.log('La velocidad actual es: ' + ferrari.acelerar() + 'Km/H');
console.log('Has frenado hasta quedarte en: ' + ferrari.frenar() + 'Km/H');