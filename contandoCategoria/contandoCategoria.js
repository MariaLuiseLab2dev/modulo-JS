/**
 * Desafio 3: Contando por Categoria
 * Descrição: Crie um array de objetos, 
 * onde cada objeto representa um produto com pelo menos um atributo 
 * chamado categoria. 
 * Seu trabalho é:
 * contar quantos produtos existem em cada categoria.
 * 
 * Saída esperada: Um objeto que mostra a contagem, como: 
 * { Eletrônicos: 3, Vestuário: 2 }.
 * 
 * Dica: Crie um objeto vazio, por exemplo, 
 * contagemCategorias = {}. 
 * Use um loop for...of para percorrer os produtos. 
 * Para cada produto, verifique se a categoria dele já existe 
 * como uma chave no seu objeto de contagem. 
 * Se existir, incremente o valor. 
 * Se não, adicione a categoria como uma nova chave com o valor 1.
 */
let objeto = {};

const produtos = [ 
    {nome: "feijão", categoria: "grãos"},
    {nome: "arroz", categoria: "grãos"},
    {nome: "milho enlatado", categoria: "grãos"},
    {nome: "leite", categoria: "liquidos"},
    {nome: "suco de laranja", categoria: "liquidos"},
    {nome: "maçã", categoria: "frutas"}
];

let contagemCategorias = {};
let produto = produtos[0];
// console.log(produto);
let contador = 0;

for (const produto of produtos) {
    if (contagemCategorias[produto.categoria]) { // se existe a categoria tal em um produto
        contagemCategorias[produto.categoria] += 1;
    } else { // se não existir essa categoria
        contagemCategorias[produto.categoria] = 1; // inicia com 1 a nova categoria  
    }
}

console.log(contagemCategorias);


