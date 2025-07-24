/**
 * Desafio 2: Encontrando o Maior Valor
 * Descrição: Dado um array de números positivos, 
 * use um loop for...of para encontrar o maior número no array 
 * e imprimi-lo no console.
 * 
 * Dica: Crie uma variável, 
 * digamos maiorNumero, 
 * e inicialize-a com 0. 
 * Depois, itere pelo restante dos números 
 * e, se encontrar um número maior que maiorNumero, 
 * atualize o valor de maiorNumero.
 */

function maiorNumero() {
    const numeros = [1,2,3,4,8.5,7,6];
    let maiorNumero = numeros[0];
    maiorNumeroConvertido = parseFloat(maiorNumero);

    // Number.MIN_VALUE  -> o menor npumero do javascript
    
    for (const numero of numeros) { // para cada número dentro do array numeros

        // verificar se o numero é um número e se ele é negativo
        if (isNaN(numero)) {
            console.log("digite APENAS números positivos");
            return;
        }

        if (numero > maiorNumero) { // se o numero atual for maior que o maiorNumero escolha esse numero como o maiorNumero da sequencia
            maiorNumero = numero;
        }
    }
    console.log(maiorNumero);
}

maiorNumero();
