let op = prompt('Que operacion quieres');
let n1 = prompt('Introduce numero 1:');
let n2 = prompt('Introduce numero 2:');
let resultado;

calculadora(n1, n2, op);


function calculadora(n1, n2, op) {
    if (op == 'suma' || op == 'sumar') {
        resultado = Number(n1) + Number(n2);
        alert(resultado);

    } else if (op == 'resta' || op == 'restar') {
        resultado = n1 - n2;
        alert(resultado);

    } else if (op == 'multiplicacion' || op == 'multiplicar') {
        resultado = n1 * n2;
        alert(resultado);

    } else if (op == 'division' || op == 'dividir') {
        resultado = n1 / n2;
        alert(resultado);

    } else {
        alert('Operacion no aceptada');
    }
}