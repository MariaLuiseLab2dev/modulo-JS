/**
 * ### **~~Exercício 2: Tipos Primitivos~~**

Crie variáveis para cada tipo primitivo:

- String (use template literals)
- Number (inclua um valor especial como Infinity)
- Boolean
- null
- undefined
- Symbol
- BigInt

Exiba o tipo de cada variável usando `typeof`.
 */

let minhaString = "minhaString";

let meuNumber = Infinity;

let meuBoolean = true;

let meuNull = null;

let meuUndefined = undefined;

let meuSymbol = Symbol('id');

let meuBigIntJeito1 = 9007199254740995n;
let meuBigIntJeito2 = BigInt(9007199254740996);

console.log(`Valor: ${minhaString} \nTipo: ${typeof minhaString}\n`);

console.log(`Valor: ${meuNumber} \nTipo: ${typeof meuNumber}\n`);

console.log(`Valor: ${meuBoolean} \nTipo: ${typeof meuBoolean}\n`);

console.log(`Valor: ${meuNull} \nTipo: ${typeof meuNull}`);

// Como verificar se uma variável é null
if (meuNull === null) {
  console.log("Tipo da variável meuNull: NULL\n");
}

console.log(`Valor: ${meuUndefined} \nTipo: ${typeof meuUndefined}\n`);

// Dois jeitos de imprimir um symbol como String:
console.log(`Valor: ${meuSymbol.toString()} \nTipo: ${typeof meuSymbol}\n`);
console.log("Valor: "+ meuSymbol.toString() +"\nTipo: " +typeof meuSymbol);

// Imprimindo o tipo de symbol
console.log(typeof meuSymbol);