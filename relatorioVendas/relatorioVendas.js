/**
 * Gerar um novo objeto "relatorio" 
 * que contenha o subtotal de vendas para cada item
 */

const carrinho = {
  'itemA': { preco: 10, qtd: 2 },
  'itemB': { preco: 5, qtd: 4 },
  'itemC': { preco: 25, qtd: 3 }
};

const relatorio = {};

for (const item of Object.entries(carrinho)) {
    console.log(item);
    let precoItem = item[1].preco;
    // console.log(precoItem);

    let qtdItem = item[1].qtd;
    // console.log(qtdItem);

    let subtotal = precoItem * qtdItem;
    // console.log(subtotal);

    // colocar o subtotal dentro do objeto, assim: 'itemA': 20,
    relatorio[item[0]] = subtotal;
}
console.log(relatorio);

