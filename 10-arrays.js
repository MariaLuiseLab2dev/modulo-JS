
// Um array vazio, pronto para ser preenchido
const tarefas = [];
console.log(tarefas);

// Um array já com alguns itens
const nomess = ["José", "Maria", "Pedro"];
const numeross = [35, 12, -30];
console.log(nomess);
console.log(numeross);

// Um array pode conter diferentes tipos de dados
const misturado = ["Maçã", 5, true, { tipo: "fruta" }];
console.log(misturado);

const frutas = ["Banana", "Goiaba", "Maçã", "Manga"];


// ACESSANDO
console.log(frutas[0]); // Saída: "Banana" (o primeiro item)
console.log(frutas[2]); // Saída: "Maçã" (o terceiro item)

console.log("ANTES: "+frutas);
// MODIFICAR
frutas[2] = "Morango";
console.log("DEPOIS: "+frutas); // Saída: [ 'Banana', 'Goiaba', 'Morango', 'Manga' ]


let frutas = ["Banana", "Goiaba", "Maçã", "Manga"];
console.log(frutas.length); // Saída: 4


// SINTAXE

array.forEach(function(elemento, indice, arrayCompleto) {
  // código a ser executado para cada elemento
});

// elemento: O valor do item atual.

// indice: A posição (índice) do item atual.

// arrayCompleto: O array original que está sendo percorrido.

const alunos = ["João", "Maria", "Pedro"];

alunos.forEach(function(nome, i) {
  console.log(`Aluno #${i + 1}: ${nome}`);
});

// Saída:
// Aluno #1: João
// Aluno #2: Maria
// Aluno #3: Pedro

frutas.forEach(fruta => { // para cada fruta dentro do array Frutas...
    console.log(fruta);
});

// exemplo 1

const numeros = [2, 1, 3, 4, 5];

const numerosDobrados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(numerosDobrados); // Saída: [4, 2, 6, 8, 10]
console.log(numeros);         // Saída: [2, 1, 3, 4, 5] (o original não mudou!)

// exemplo 2
const nomes = ["ana", "bruno", "carlos"];

const nomesMaiusculos = nomes.map(function(nome) {
  return nome.toUpperCase();
});

console.log(nomes);
console.log(nomesMaiusculos); // Saída: [ 'ANA', 'BRUNO', 'CARLOS' ]


// Exemplo 1: Filtrando apenas os números pares
const numeros1 = [2, 1, 3, 4, 5, 6, 9, 7, 10, 8];

const numerosPares = numeros1.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // Saída: [ 2, 4, 6, 10, 8 ]

// Exemplo 2: Filtrando usuários ativos
const usuarios = [
  { nome: 'João', ativo: false },
  { nome: 'José', ativo: false },
  { nome: 'Alice', ativo: true },
  { nome: 'Mariana', ativo: false },
  { nome: 'Charlie', ativo: true }
];

const usuariosAtivos = usuarios.filter(function(usuario) {
  return usuario.ativo === true;
});

console.log(usuariosAtivos);
// Saída: [{ nome: 'Alice', ativo: true }, { nome: 'Charlie', ativo: true }]

// ---------------------------- REDUCE() ---------------------------- // 
// Exemplo 1: Somando todos os números de um array
const numeros2 = [10, 20, 30, 40];

const somaTotal = numeros2.reduce(function(total, numero) {
  console.log(`Total: ${total}, Número: ${numero}`);
  return total + numero;
}, 0); // O valor inicial do acumulador (total) é 0

console.log(somaTotal); // Saída: 100

// Somando o preço dos produtos caros
const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Celular', preco: 800 },
  { nome: 'Monitor', preco: 1200 }
];

// Queremos a soma do preço dos produtos com valor acima de 1000
const somaDosCaros = produtos
 .filter(function(produto) {
    return produto.preco > 1000; // 1. Filtra: [{ nome: 'Laptop',...}, { nome: 'Monitor',...}]
  })
 .map(function(produto) {
    return produto.preco; // 2. Mapeia: [2500, 1200]
  })
 .reduce(function(soma, preco) {
    return soma + preco; // 3. Reduz: 2500 + 1200 = 3700
  }, 0);

console.log(somaDosCaros); // Saída: 3700
