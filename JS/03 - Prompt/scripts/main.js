let nota = prompt('¿Cual es tu nota?')

if (nota < 5) {
    console.log('Suspenso');
} else if (nota >= 5 && nota < 7) {
    console.log('Suficiente');
} else if (nota >= 7 && nota < 9) {
    console.log('Notable');
} else if (nota >= 9 && nota <= 10) {
    console.log('Sobresaliente');
}