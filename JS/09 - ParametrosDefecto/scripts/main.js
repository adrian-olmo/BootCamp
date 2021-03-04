let nombre = prompt('Introduce tu nombre');
let letrasNom = nombre.substring(0, 2).toUpperCase();
let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


let posicionLetra;
let regla = (posicionLetra, letrasNom) => letrasNom + posicionLetra;

for (let i = 0; i >= letras.length; i++) {

}

console.log(regla(posicionLetra, letrasNom));