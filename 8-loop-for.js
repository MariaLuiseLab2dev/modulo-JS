
// Tudo o que precisamos está em uma única linha!
for (let contador = 1; contador <= 5; contador++) {
  console.log("O número atual é: " + contador);
}

console.log("Fim do loop!");

// Saída no console:
// O número atual é: 1
// O número atual é: 2
// O número atual é: 3
// O número atual é: 4
// O número atual é: 5
// Fim do loop!

const frutas = ["Maçã", "Banana", "Laranja", "Morango"];

// A propriedade.length nos dá o número de itens no array.
// Nosso loop irá de i = 0 até i = 3.
for (let i = 0; i < frutas.length; i++) {
  // A cada iteração, usamos o valor de 'i' para acessar um elemento.
  console.log(`Fruta na posição ${i}: ${frutas[i]}`);
}

// Saída:
// Fruta na posição 0: Maçã
// Fruta na posição 1: Banana
// Fruta na posição 2: Laranja
// Fruta na posição 3: Morango

// Contagem regressiva para o lançamento!
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Lançar!");

// Imprimindo números pares de 0 a 10
for (let i = 0; i <= 10; i = i + 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10
}

const frutas1 = ["Maçã", "Banana", "Laranja", "Morango"];

// Para cada 'fruta' dentro do array 'frutas'...
for (const fruta of frutas1) {
  // A variável 'fruta' já contém o valor do elemento ("Maçã", "Banana", etc.).
  console.log(fruta);
}

// Saída:
// Maçã
// Banana
// Laranja
// Morango


const numeros = [2, 8, 15, 22, 30, 41, 50];
const numeroProcurado = 22;

for (const numero of numeros) {
  console.log(`Verificando o número: ${numero}`);

  if (numero === numeroProcurado) {
    console.log("Achei!");
    break; // Encontrou o número, então sai do loop.
  }
}

console.log("A busca terminou.");

// Saída:
// Verificando o número: 2
// Verificando o número: 8
// Verificando o número: 15
// Verificando o número: 22
// Achei!
// A busca terminou.

const listaDeNumeros = [10, 5, -3, 20, -8, 15];
let soma = 0;

for (const numero of listaDeNumeros) {
  if (numero < 0) {
    // Se o número for negativo, pula o resto do código desta iteração.
    console.log(`Ignorando o número negativo: ${numero}`);
    continue;
  }

  // Este código só é executado para números positivos.
  soma = soma + numero;
  console.log(`Somando ${numero}. Soma atual: ${soma}`);
}

console.log(`A soma final dos números positivos é: ${soma}`); // 45

// Saída:
// Somando 10. Soma atual: 10
// Somando 5. Soma atual: 15
// Ignorando o número negativo: -3
// Somando 20. Soma atual: 35
// Ignorando o número negativo: -8
// Somando 15. Soma atual: 50
// A soma final dos números positivos é: 50
