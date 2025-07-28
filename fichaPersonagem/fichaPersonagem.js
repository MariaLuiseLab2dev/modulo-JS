/**
 * 
Tarefa: Escreva um código que:

Use Object.keys() para imprimir no console um cabeçalho "Atributos do Personagem:" 
seguido por uma lista de todos os atributos (chaves).
Use Object.values() para imprimir no console um cabeçalho "Valores dos Atributos:" 
seguido por uma lista de todos os valores.

 */

const personagem = {
  nome: "Aragorn",
  classe: "Guerreiro",
  raca: "Humano",
  forca: 18,
  destreza: 15,
  inteligencia: 14
};

const atributosPersonagem = Object.keys(personagem);
console.log("Atributos do Personagem: ");
for (const atributo of atributosPersonagem) {
    console.log(`- ${atributo}`);
}

const valoresAtributos = Object.values(personagem);
console.log("Valores dos Atributos: ");
for (const valor of valoresAtributos) {
    console.log(` - ${valor}`);
}