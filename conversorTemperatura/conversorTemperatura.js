/**
 * Exercício "Conversor de Temperatura" 
 * Crie uma função que converta graus Celsius para Fahrenheit.
 * A fórmula é: (Celsius∗9/5)+32.
 * A função deve aceitar a temperatura em Celsius como argumento 
 * e retornar a temperatura em Fahrenheit.
 * Use um parâmetro padrão para que, 
 * se a função for chamada sem argumentos, 
 * ela use 0 como o valor de Celsius.
 * 
 * Chame a função duas vezes: uma vez com um valor (ex: 25) 
 * e uma vez sem argumentos, e imprima ambos os resultados no console.
 */

const conversorTemperaturaCelsiusParaFahrenheit = (temperaturaEmCelsius = 0) => {
    let conversaoResultado = (temperaturaEmCelsius * 9/5) + 32;
    
    return conversaoResultado;
}

console.log(conversorTemperaturaCelsiusParaFahrenheit(25));
console.log(conversorTemperaturaCelsiusParaFahrenheit());