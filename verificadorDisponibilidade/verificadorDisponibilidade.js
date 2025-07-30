const produtos = {
  notebook: true,
  smartphone: false,
  tablet: true,
  fone: false
};

for (const produto of Object.entries(produtos)) {
    // console.log(Object.entries(produtos));
    // if (!produto[1]) {
    //     console.log(`${produto[0]} está indisponivel.`);
    // } else {
    //     console.log(`${produto[0]} está disponível.`);
    // }

    //USANDO TERNÁRIO
    (!produto[1]) ? `${produto[0]} está indisponivel.` : `${produto[0]} está disponível.`;
}

