/**
 * Desafio 1: A Tabuada
 * Descrição: Escreva um script que use a função prompt() para pedir um número ao usuário. 
 * Em seguida, use um loop for para calcular 
 * e imprimir no console a tabuada desse número, de 1 a 10.
 * Exemplo de saída para o número 7: 7 x 1 = 7 7 x 2 = 14 ... 7 x 10 = 70
 * Dica: Você precisará de uma variável para armazenar o número do usuário 
 * e um loop for que conte de 1 a 10.
 */

function tabuada() {
    let numero = prompt("Por favor, digite um número para calcular a tabuada.");
    
    if (isNaN(numero)) {
        console.log("Digite apenas números.");
        return;
    }
    
    numero = Number(numero);

    for(let i=0; i <= 10; i++) {
        let tabuada = numero * i;
        console.log(`${numero} * ${i} = ${tabuada}`);
    }
}

tabuada();