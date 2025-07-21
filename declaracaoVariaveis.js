/**
 * ### **Exercício 1: Declaração de Variáveis**
 * Crie um programa que:
 * 1. Declare uma variável com `var`, `let` e `const`
 * 2. Atribua valores diferentes para cada uma
 * 3. Tente reatribuir valores e observe o comportamento
 * 4. Use `console.log()` para exibir os resultados
 */

//CRIANDO VAR
var variavelCachorro = "cachorro";
let variavelGato = "gato";
const ANIMAL = [variavelCachorro, variavelGato];
const ANIMAL2 = "animal";

console.log(variavelCachorro);
console.log(variavelGato);
console.log(ANIMAL);

//REATRIBUINDO
variavelCachorro = "lobo";
variavelGato= "leão";

console.log(variavelCachorro); // VAR PODE TER ATRIBUIÇÃO
console.log(variavelGato); // LET NÃO PODE TER ATRIBUIÇÃO

// CONST NÃO PODE TER ATRIBUIÇÃO
// const ANIMAL = [variavelCachorro, variavelGato, "leão"];