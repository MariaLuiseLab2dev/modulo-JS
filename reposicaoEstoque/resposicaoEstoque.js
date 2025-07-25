/** 
 * Exercício: Controle de Estoque e Alerta de Reposição
Descrição:

Você é responsável por um sistema simples de controle de estoque de uma loja.
Cada produto é representado por um objeto com as seguintes propriedades:

nome: o nome do produto
quantidade: o número atual em estoque
estoqueMinimo: o mínimo necessário que deve existir no estoque

Objetivo:

Criar um array com pelo menos 5 produtos.

Escrever uma função que:

Verifique quais produtos estão abaixo do estoque mínimo.

Mostre uma mensagem como:
"Produto X está abaixo do estoque mínimo. Repor urgente!"

E adicione esses produtos em um novo array chamado produtosParaReposicao.

Ao final, exiba no console esse novo array com os produtos que precisam de reposição.

🧠 Dica:
Você pode usar um for...of ou um .forEach e dentro aplicar if (produto.quantidade < produto.estoqueMinimo).
 */


const produtos = [
    {nome: "Pasta de Dente", quantidade: 100, estoqueMinimo: 100},
    {nome: "Enxaguante Bucal", quantidade: 30, estoqueMinimo: 50},
    {nome: "Escova de Dente", quantidade: 400, estoqueMinimo: 200},
    {nome: "Fio de Dente", quantidade: 90, estoqueMinimo: 80},
    {nome: "Limpador de Língua", quantidade: 100, estoqueMinimo: 200}
]

const produtosParaReposicao = [];

function verificarEStoque() {

    for (const produto of produtos) {
        if (produto.quantidade < produto.estoqueMinimo) {
            console.log(`Produto ${produto.nome} está abaixo do estoque mínimo. Repor urgente!\n`);
            produtosParaReposicao.push(produto);  
        } 
    }
    console.log("---------- Produtos para reposição ----------");
    for (let index = 0; index < produtosParaReposicao.length; index++) {
        const produto = produtosParaReposicao[index];
        console.log(`${index} - ${produto.nome} | qtd: ${produto.quantidade} | qtd mínima: ${produto.estoqueMinimo}`)
    }
}

verificarEStoque();