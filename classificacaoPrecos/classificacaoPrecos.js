/** 
 * Exercício 5: Classificação de Produtos por Preço
 * Descrição:
 * Você tem um array de objetos, 
 * onde cada objeto representa um produto com nome e preco.
 * Crie um novo objeto que classifique os produtos em duas categorias:
 * baratos (preço até 50)
 * caros (acima de 50)
 */

function classificadorPRecos() {
    const arrayProdutos = [
        {produto: 'banana', preco: 50.00},
        {produto: 'maça', preco: 35.50},
        {produto: 'atemoia', preco: 80.00},
    ];

    // console.log(arrayProdutos[2].preco);

    // um objeto com 2 arrays
    const classificador = {
        baratos: [], // um array com os baratos
        caros: [] // um array com os caros
    };

    for (const produto of arrayProdutos) {
        if (produto.preco <= 50) {
            classificador.baratos.push(produto);
        } else {
            classificador.caros.push(produto);
        }
    }
    console.log(classificador);
}

classificadorPRecos();
