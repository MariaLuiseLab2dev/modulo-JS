
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

const calcularIMC = () => {
    // Pego os dois inputs do index.html
    let peso = Number(document.getElementById("peso").value.trim());
    let altura = Number(document.getElementById("altura").value.trim());

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultadoIMC").textContent = "Por favor, insira valores válidos.";
        return;
    }

    let imcResultado = peso/(altura*altura);
    let imcFormatado = imcResultado.toFixed(2);

    document.getElementById("resultadoIMC").textContent = "Resultado: " + imcFormatado;
}
// const meuImc = calcularIMC(70, 1.65);

// console.log(meuImc);
