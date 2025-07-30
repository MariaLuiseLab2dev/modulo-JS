const produtos = [
  {
    id: 1,
    nome: 'Camiseta',
    categoria: 'Roupas',
    preco: 59.90,
    estoque: 120
  },
  {
    id: 2,
    nome: 'Calça Jeans',
    categoria: 'Roupas',
    preco: 129.90,
    estoque: 80
  },
  {
    id: 3,
    nome: 'Tênis',
    categoria: 'Calçados',
    preco: 299.90,
    estoque: 50
  },
  {
    id: 4,
    nome: 'Smartphone',
    categoria: 'Eletrônicos',
    preco: 1999.90,
    estoque: 35
  },
  {
    id: 5,
    nome: 'Fone de Ouvido',
    categoria: 'Eletrônicos',
    preco: 149.90,
    estoque: 0
  },
  {
    id: 6,
    nome: 'Relógio',
    categoria: 'Acessórios',
    preco: 499.90,
    estoque: 25
  },
  {
    id: 7,
    nome: 'Televisão',
    categoria: 'Eletrônicos',
    preco: 3499.90,
    estoque: 15
  },
];

/**
 * Desafio 1: 
 * Listar Nomes de Produtos 
 * Use o método map para criar um novo array 
 * que contenha apenas o nome de cada produto.
 */
const nomeProdutos = produtos.map(function(produto) {
    return produto.nome;
});

const nomeProdutos1 = produtos.map(produto => produto.nome);

console.log(nomeProdutos);
console.log(nomeProdutos1);

/**
 * Desafio 2: 
 * Produtos de "Eletrônicos" 
 * Use o método filter para criar um novo array 
 * que contenha apenas os produtos da categoria "Eletrônicos".
 */


const categoriaEletronicos = produtos.filter(function(produto) {
    if(produto.categoria === "Eletrônicos") {
        return true;
    }
});

console.log(categoriaEletronicos);

const categoriaEletronicos1 = produtos.filter( (produto) => produto.categoria === "Eletrônicos");

console.log(categoriaEletronicos1);

/**
 * Desafio 3: 
 * Valor Total do Estoque de Roupas 
 * Este é um desafio de encadeamento! 
 * Você precisa calcular o valor total do estoque 
 * apenas para os produtos da categoria "Roupas". 
 * O valor de cada produto em estoque é preco * estoque
 */

// Primeiro, filtre os produtos de "Roupas".

const valorTotalEstoqueRoupas = produtos
.filter(function(produto) {
    if(produto.categoria === "Roupas") {
        return true;
    }
})
// Mapeie cada produto para seu valor total em estoque
.map(function (produto) {
    valorProduto = produto.preco * produto.estoque;
    console.log(valorProduto);
    return valorProduto;
})
// Por fim, reduza o array resultante para obter a soma total.
.reduce(function(acc, valorProduto) {
    valorTotal = acc + valorProduto;
    console.log(valorTotal);
    return valorTotal;
},0);

// transforma em arrowFunction

/**
 * Desafio 4: Agrupar por Categoria 
 * Use o método reduce para transformar 
 * o array de produtos em um objeto onde 
 * as chaves são as categorias 
 * e os valores são arrays com os produtos de cada categoria.
 */

// ENTRADAS: array de produtos
///SAÍDA: contagem de cada categoria que tem em produtos


let contagemCategorias = {};
const agruparProdutoPorCategoria = produtos.reduce(function Agrupacategoria(acc, produto) {
    // acc <= contagemCategorias = {}
    let categoriaProduto = produto.categoria;
    // console.log(categoriaProduto);
    if(!acc[categoriaProduto]) { // se a categoria não existe dentro de contagemCategoria
        // inicia essa categoria com um array vazio
        acc[categoriaProduto] = [];
    }
    // Se existir, adicione o produto dentro do array 
    acc[categoriaProduto].push(produto);
    return acc;
},contagemCategorias);

console.log(agruparProdutoPorCategoria);

// Agora faz em ArrowFunction
const agruparProdutoPorCategoriaArrowFunction = produtos.reduce( (acc, produto) => {
    let categoriaProduto = produto.categoria;
    // console.log(categoriaProduto);

    if (!acc[categoriaEletronicos]) {
        acc[categoriaProduto] = [];
    }
    acc[categoriaProduto].push(produto);
    return acc;

},{});

console.log(agruparProdutoPorCategoriaArrowFunction);