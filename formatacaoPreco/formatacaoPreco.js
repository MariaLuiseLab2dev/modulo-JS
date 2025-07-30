const precos = {
  'café': 500,
  'bolo': 850,
  'suco': 425
};

console.log(precos);

// const valoresPrecos = Object.values(precos);
// console.log(valoresPrecos);
// for (const preco of valoresPrecos) {
//     let precoEmFloat = preco / 100;
//     let precoEmReais = new Intl.NumberFormat(
//      "pt-BR", 
//      {style: "currency", currency: "BRL"})
//      .format(precoEmFloat)
//     console.log(precoEmReais);
// }

const ProdutosComPrecosAjustados = Object.entries(precos);
console.log(ProdutosComPrecosAjustados);

for (const [produto, preco] of Object.entries(precos)) { // para cada par de chave valor do objeto precos
    let precoEmFloat = preco / 100;
    let precoEmReais = Intl.NumberFormat(
        "pt-BR", // locales - identifica a localidade pra formatar (coloca o R$ e a vírhgula)
         {style: "currency", currency: "BRL"}
        ) // estilo moeda e passa a moeda que quer
        .format(precoEmFloat) // formata
    console.log(`${produto} - ${precoEmReais}`);
}