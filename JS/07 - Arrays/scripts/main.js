const dni = prompt('Introduce tu DNI');

if (dni.length != 9) {
    alert('DNI incorrecto');
} else {
    let letraDNI = dni.substring(8, 9);
    let numDNI = parseInt(dni.substring(0, 8));


    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    const letraCorrecta = letras[numDNI % 23];


    if (numDNI === /\d{8}[a-z A-Z]/) {

        numDNI = parseInt(prompt('Introduce un numero de DNI valido'));

    } else {
        if (letraDNI.toUpperCase() !== letraCorrecta) {

            alert('Has introducido una letra incorrecta ' + '\n' + 'Tu letra debería ser: ' + letraCorrecta);

        } else {
            alert('DNI Correcto');
        }
    }
}