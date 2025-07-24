/**
 * Exercício 5: "Detetive de Escopo" 
 * Analise o código abaixo. 
 * Antes de executá-lo, 
 * tente prever o que será impresso em cada console.log. 
 * Anote suas respostas 
 * e depois execute o código para verificar se você acertou. 
 * Explique o porquê de cada resultado, 
 * baseando-se nos conceitos de escopo global e local.
 */

let heroiGlobal = "Superman"; // visivel pra todos

function mostrarHeroi() {
  let heroiLocal = "Batman";
  console.log(heroiLocal); // Previsão 1: O que imprime aqui? Batman
  console.log(heroiGlobal); // Previsão 2: E aqui? Superman
}

mostrarHeroi();
console.log(heroiGlobal);   // Previsão 3: E aqui? Superman

//console.log(heroiLocal); 
// // Previsão 4: O que aconteceria se descomentássemos esta linha? 
// Daria erro de referencia pois a variavel local só existe na função.
