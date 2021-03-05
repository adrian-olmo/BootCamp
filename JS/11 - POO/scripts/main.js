/* Variables */
let numero = parseInt(prompt('Introduce un numero'));
let arrayNums = [2, 5, 159, 256, 0, 256];
let persona = { nombre: 'Adri', edad: 21 };

/* Funciones */
const esPar = numero => numero % 2 === 0; // ej 1
const arrayPares = arrayNums.map(esPar);
const objetoPersona = Object.entries(persona).forEach(([key, value]) => console.log(key + ':', value));

/* Ejercicios */

/* 1º Parte --> Devuelve true o false */
console.log(esPar(numero));

/* 2º Parte --> Devuelve Array de Booleanos*/
console.log(arrayPares);

/* 3º Parte --> Mostrar keys de un objeto*/
// funcion en linea