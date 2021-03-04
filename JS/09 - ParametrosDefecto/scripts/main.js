let nombre = prompt('Introduce tu nombre');
let letrasNom = nombre.substring(0, 2).toUpperCase();
let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let num1, num2;
let regla = (num1, num2, letrasNom) => letrasNom + num1 + num2;
let i = 0;

while ((!num1 || !num2) && i < letras.length) {
    if (letrasNom[0] == letras[i]) {
        num1 = i + 1;
    }
    if (letrasNom[1] == letras[i]) {
        num2 = i + 1;
    }
    i++;
}


console.log(regla(num1, num2, letrasNom));