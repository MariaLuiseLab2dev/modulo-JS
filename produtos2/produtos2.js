const produtos = [
    { id: 1, nome: 'Camiseta',   categoria: 'Roupas',      preco: 59.90,   estoque: 0 },
    { id: 2, nome: 'Calça Jeans', categoria: 'Roupas',      preco: 129.90,  estoque: 80  },
    { id: 3, nome: 'Tênis',       categoria: 'Calçados',    preco: 299.90,  estoque: 120  },
    { id: 4, nome: 'Smartphone',  categoria: 'Eletrônicos', preco: 1999.90, estoque: 35  },
    { id: 5, nome: 'Fone de Ouvido', categoria: 'Eletrônicos', preco: 149.90, estoque: 10   },
    { id: 6, nome: 'Relógio',     categoria: 'Acessórios',  preco: 499.90,  estoque: 25  },
    { id: 7, nome: 'Televisão',   categoria: 'Eletrônicos', preco: 3499.90, estoque: 15  },
];

/**
 * ### Desafio 1: ID e Nome Juntos
 * Use `map` para criar um array de strings no formato `"ID - Nome"`.
 * Resultado esperado:
 */

const mapeandoIdNome = produtos.map(produto => `${produto.id} - ${produto.nome}`);
// console.log(mapeandoIdNome);

/**
 * ### Desafio 2: Filtrar Estoque Crítico
 * Crie um array contendo apenas os produtos que têm 
 * estoque menor que 20 e preço maior que 100, usando `filter`.
 *
 * 
 */

const filtroEstoqueCritico = produtos
// .filter(produto => {
//     if(produto.estoque < 20 && produto.preco > 100) {
//         return true;
//     }
// });

.filter(produto => produto.estoque < 20 && produto.preco > 100);
// console.log("---- ESTOQUE CRÍTICO ----\n", filtroEstoqueCritico);

// irei passar o objetoInicial como um objeto vazio e os parametros o acc e a letra, 
// ele vai percorrer o array e verificar se a letra existe, 
// se existir ele adiciona 1 a propriedade letra, 
// se não existir ele cria e adiciona 1.
const letras = ['a', 'b', 'b','c'];
const objInicial = {}; 

const contagemLetras = letras.reduce((acc, letra) => { 
    if(acc[letra] !== undefined) { 
        acc[letra] += 1; 
    } else { 
        acc[letra] = 1; 
    } 
    return acc; 
}, objInicial);
console.log(contagemLetras);

//COM TERNÁRIO
const contagemLetras2 = letras.reduce((acc, letra) => {
    acc[letra]= (acc[letra] !== undefined ? acc[letra] + 1 : 1); 
    return acc; 
});
console.log(contagemLetras2);
//
/**
 * ### Desafio 3: Produto com Máximo e Mínimo de Estoque
 * Utilize `reduce` para descobrir qual produto tem 
 * o maior estoque e o menor estoque. 
 * Retorne um objeto assim:
 * {
 *      maiorEstoque: { id: X, nome: '...', estoque: N },
 *      menorEstoque: { id: Y, nome: '...', estoque: M }
}
 */

let estoqueInicial = {
    maiorEstoque: { id: null, categoria: "", nome: "", estoque: Number.MIN_VALUE },
    menorEstoque: { id: null, categoria: "", nome: "", estoque: Number.MAX_VALUE }
};
const estoqueMaiorMenor = produtos.reduce((acc,produto) => {
    //1: crio uma variavel que armazena o número do estoque do produto atual
    let produtoAtual = produto.estoque;
    //2: verifico se ele é o maior de todos os produtos começando com o estoqueInical
    if(produtoAtual > acc.maiorEstoque.estoque) { // se o prod for maior q o do estoque 
        acc.maiorEstoque = produto;
    }
    if(produtoAtual < acc.menorEstoque.estoque) {
        acc.menorEstoque = produto;
    }
    return acc;
},estoqueInicial);

console.log(estoqueMaiorMenor);

/**
 * ### Desafio 5: Agrupar por Faixa de Preço
 * Use `reduce` para criar um objeto que tenha três faixas:
 * - `"Barato"` para preço < 100
 * - `"Médio"` para preço entre 100 e 500
 * - `"Caro"` para preço > 500
 * E cada chave aponta para um array com os produtos daquela faixa.
 */

const precosAgrupados = {
    Barato: [],
    Medio: [],
    Caro: [],
};

const agrupaPorFaixaPreco = produtos.reduce((acc, produto) => {
    //1. pego o preço daquele produto
    let precoProduto = produto.preco;
    if (precoProduto > 500) {
        acc.Caro.push(produto);
    }
    else if (precoProduto >= 100 && precoProduto <= 500) {
        acc.Medio.push(produto);
    }
    else {
        acc.Barato.push(produto);
    }
    return acc;
}, precosAgrupados);

console.log(agrupaPorFaixaPreco);

/**
 * ### Desafio 6: Média de Preço por Categoria
 * 1. Primeiro, agrupe os produtos por categoria com `reduce`, 
 * mas somando **preço total** e **quantidade** de cada grupo.
 * 2. Em seguida, transforme esse agrupamento em um novo objeto 
 * que retorne **média de preço** (somaPrecos ÷ quantidade) para cada categoria.
 */

// const mediaPrecoPorCategoria = produtos.reduce((acc, produto) => {
//     categoriaProduto = produto.categoria;
//     console.log(categoriaProduto);

//     if(!acc[categoriaProduto]) { 
//          acc 
//     }

// },{});