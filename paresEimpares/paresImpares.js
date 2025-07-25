/**
 *  Exercício 1: Contando Números Pares e Ímpares
 * Descrição:
 * Dado um array de números inteiros, crie um programa 
 * que conte quantos são pares 
 * e quantos são ímpares, 
 * e imprima os dois totais separadamente.
 * 
 */

function parImpar() {
    const numerosInteiros = [0,1,2,3,4,5,6];
    let contadorPar = 0;
    let contadorImpar = 0;
    
    for (const numero of numerosInteiros) {
        if(numero % 2 == 0) {
            contadorPar++;
        } else {
            contadorImpar++;
        }
    }
    console.log(`Números Pares: ${contadorPar} \nNúmeros Impares: ${contadorImpar}`);
}

parImpar();
