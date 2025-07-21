
/**
 * 
 * Exercício 3: "Calculadora de IMC" 
 * Crie uma arrow function (const nome = () => {}) chamada calcularIMC.
 * Ela deve aceitar dois parâmetros: peso (em kg) e altura (em metros).
 * Ela deve retornar o valor do IMC calculado pela fórmula: peso/(altura∗altura).
 * Fora da função, chame-a com valores de exemplo (ex: 80 kg e 1.80 m).
 * Armazene o resultado retornado em uma variável chamada meuIMC.
 * Imprima o valor da variável meuIMC no console.
 */

const calcularIMC = (peso, altura) => {
    let imcResultado = peso/(altura*altura);
    return imcResultado.toFixed(2);
}

const meuImc = calcularIMC(70, 1.65);

console.log(meuImc);
