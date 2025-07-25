/**
 * Exercício 2: Verificando Números Positivos
 * Descrição:
 * Crie uma função que receba um array com números (inteiros ou decimais) 
 * e verifique se todos os números são positivos.
 * Se algum número for negativo, imprima uma mensagem de aviso e pare a execução.
 */

// function verificarNumeros() {
//     const arrayNumeros = [2,-3.2,4.5,-5,0,6];

//     // for (const numero of arrayNumeros) {
//     //     if (numero == 0) {
//     //         console.log(`${numero}: número igual a 0`);
//     //     } else if (numero > 0) {
//     //         console.log(`${numero}: número positivo`);
//     //     } else {
//     //         console.log(`${numero}: número negativo!`);
//     //         return;
//     //     }
//     // }
// }

function verificarNumeros() {
    const arrayNumeros = [2, -3, 4.5, -5, 0];
    for (const numero of arrayNumeros) {
        if (isNaN(numero)) {
            console.log("Digite apenas numeros!");
            return;
        }
        if (numero === 0) {
            console.log(`${numero}: número igual a 0`);
            continue;
        }
        if (numero > 0) {
            console.log(`${numero}: número positivo`);
            continue;
        }
        console.log(`${numero}: número negativo!`);
    }
}

verificarNumeros();