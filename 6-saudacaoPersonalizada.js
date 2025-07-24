/**
 * 
 * Exercício 2: "Saudação Personalizada" 
 * Crie uma expressão de função (usando const nome = function() {}) 
 * chamada saudacaoPersonalizada. 
 * A função deve aceitar um parâmetro nome. 
 * Dentro da função, imprima no console uma saudação que inclua o nome fornecido, 
 * como por exemplo: "Olá, [nome]! Tenha um ótimo dia.". 
 * Chame a função passando seu próprio nome como argumento.
 */


const saudacaoPersonalizada = function(nomePessoa) {
    console.log(`Olá, ${nomePessoa}! Tenha um ótimo dia.`);
};

saudacaoPersonalizada("Luise");
