let array = [4, 8, 12];
const aplicar = e => 2 * e;
let funcArray = (aplicar, array) => {
    let retorno = [];
    for (let i = 0; i < array.length; i++) {
        retorno.push(aplicar(array[i]));
    }
    return retorno;
}


console.log(funcArray(aplicar, array));