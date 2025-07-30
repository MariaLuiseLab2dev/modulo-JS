const receita = {
  ovos: 4,
  leite: "200ml",
  farinha: "300g",
  fermento: "1 colher",
  chocolate: null
};

for (const ingrediente of Object.keys(receita)) {
    let valorDoIngrediente = receita[ingrediente];
    // console.log(valorDoIngrediente);
    
    // if (valorDoIngrediente !== null || valorDoIngrediente !== '')
    if (valorDoIngrediente) { // usando o truthy e falsy
        console.log(`Você precisa de ${valorDoIngrediente} ${ingrediente}`);
    } 
}