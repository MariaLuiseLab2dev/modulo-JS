/**
 * ### **Exercício 4: Coerção de Tipos**

Crie um programa que demonstre:

1. Coerção implícita com o operador `+`
2. Coerção com outros operadores aritméticos
3. Compare os resultados usando `==` vs `===`
4. Documente o comportamento observado
 */

//coerção implícita
console.log(10 + "5"); // string 105

console.log("A resposta é " + 42); // "a respsota é 42"

console.log("10" - 5); // transforma em número, resultado: 5

console.log("10" * "2"); // transforma em número, resultado: 20

console.log("10" / "2");

console.log("dez" / "2");

//coerção explícita
let idadeString = "25";
console.log(typeof idadeString);
let idadeNumero = Number(idadeString); // convertendo explicitamente
console.log(typeof idadeNumero);

let numero = 123;
let numeroString = String(numero); // Converte explicitamente para a string "123"
console.log(typeof numeroString); // "string"

let valorVazio = " ";
console.log(valorVazio);
let valorBooleano = Boolean(valorVazio); // Converte explicitamente para o booleano false
console.log(valorBooleano); // true

