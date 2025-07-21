/**
 * 
 * Crie uma calculadora que:
 * 1. Declare duas variáveis numéricas
 * 2. Realize as 4 operações básicas (+, -, *, /)
 * 3. Exiba os resultados com template literals
 * 4. Teste com diferentes tipos de números (inteiros, decimais)} 
 * 
 */

function calcular(op) {
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);

    if (isNaN(numero1) || isNaN(numero2)) { // se qualquer um dos dois números não for um número
        alert("digite dois números válidos.");
        return; // retorna nada (void)
    } else if (numero1) {
        
    }

    let resultado;

    switch (op) {
        case "soma":
        resultado = numero1 + numero2;
        break;
    
        case "subtracao":
        resultado = numero1 - numero2;
        break;
    
        case "multiplicacao":
        resultado = numero1 * numero2;
        break;
    
        case "divisao":
        if (numero2 === 0) {
            resultado = "Não é possível dividir por zero.";
        } else {
            resultado = numero1 / numero2;
        }
        break;
    
        default:
        resultado = "Operação inválida.";
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}


