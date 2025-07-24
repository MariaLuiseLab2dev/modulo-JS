// 1. Inicialização: Criamos nossa variável de controle.
let contador = 1;

// 2. Condição: O loop continuará enquanto 'contador' for menor ou igual a 5.
while (contador <= 5) {
    console.log("O número atual é: " + contador);

    // 3. Atualização: Incrementamos o contador em 1 a cada iteração.
    // Sem esta linha, o loop nunca terminaria!
    contador++;
}

console.log("Fim do loop!");

// Saída no console:
// O número atual é: 1
// O número atual é: 2
// O número atual é: 3
// O número atual é: 4
// O número atual é: 5
// Fim do loop!

// Exemplo de um loop infinito. NÃO EXECUTE ESTE CÓDIGO!
// let i = 0;
// while (i < 10) {
//     console.log("Estou preso!");
//     // A variável 'i' nunca muda, então 'i < 10' será sempre verdadeiro.
// }


let senhaCorreta = "javascript123";
let tentativa;

do {
    let tentativa = prompt("Por favor, digite a senha:");

    if(tentativa !== senhaCorreta) {
        alert("Senha incorreta. Tente novamente");
    }
} while (tentativa !== senhaCorreta) {
    alert("Acesso concedido!");
}