const minhaPromessa = new Promise((resolve, reject) => {
    console.log("Iniciando a operação demorada...");

    setTimeout(() => {
        const sucesso = true; // Simule se a operação deu certo ou não

        if (sucesso) {
            resolve("Operação concluída com sucesso!"); // A promessa foi cumprida!
        } else {
            reject("Ocorreu um erro na operação."); // A promessa foi rejeitada!
        }
    }, 2000); // Simula uma espera de 2 segundos
});

minhaPromessa
    .then((resultado) => {
        console.log("Sucesso: " + resultado);
    })
    .catch((erro) => {
        console.error("Erro: " + erro);
    });

console.log(minhaPromessa);


// A função fetch() retorna uma Promise que resolve para um objeto Response.
fetch('https://catfact.ninja/fact')
    .then(response => {
        // O primeiro.then lida com a resposta HTTP em si.
        // É uma boa prática verificar se a resposta foi bem-sucedida.
        if (!response.ok) {
            // Se a resposta não for um sucesso (status não na faixa 200-299),
            // lançamos nosso próprio erro. Isso fará com que a Promise seja rejeitada
            // e a execução pulará para o bloco.catch().
            throw new Error(`Erro de HTTP! Status: ${response.status}`);
        }
        // response.json() também é uma operação assíncrona que retorna uma Promise.
        // Esta Promise resolverá com o corpo da resposta analisado como JSON.
        return response.json();
    })
    .then(data => {
        // Este segundo.then recebe o resultado da Promise de response.json().
        console.log("Fato sobre gatos:", data.fact);
    })
    .catch(error => {
        // Um único bloco.catch() no final da cadeia pode lidar com vários tipos de erros:
        // - Erros de rede (ex: sem conexão com a internet).
        // - O erro que lançamos manualmente no primeiro.then().
        console.error("Falha ao buscar o fato sobre gatos:", error);
    });


// Uma string JSON com um erro de sintaxe (vírgula extra no final)
const invalidJsonString = '{"name": "John Doe", "age": 30,}';

console.log("Tentando analisar o JSON...");

try {
    // O código que pode falhar é colocado aqui
    const user = JSON.parse(invalidJsonString);
    console.log("Sucesso:", user); // Esta linha não será executada
} catch (error) {
    // Se JSON.parse() falhar, a execução salta para este bloco
    console.error("Ocorreu um erro! O script travou.");
    console.error("Nome do erro:", error.name);       // Saída: SyntaxError
    console.error("Mensagem do erro:", error.message); // Saída: Unexpected token } in JSON at position...
} finally {
    // Este bloco é executado independentemente do resultado
    console.log("Este bloco é executado de qualquer maneira. Tentativa de análise finalizada.");
}

console.log("O programa continua após o bloco try...catch.");

async function meuFluxoDeTrabalho() {
  try {
    console.log("Iniciando...");
    const resultado1 = await primeiraOperacao();
    
    console.log("Primeira etapa concluída.");
    const resultado2 = await segundaOperacao(resultado1);

    console.log("Segunda etapa concluída.");
    const resultadoFinal = await terceiraOperacao(resultado2);

    console.log("Resultado final: " + resultadoFinal);
  } catch (erro) {
    console.error("Uma das operações falhou: " + erro);
  }
}

meuFluxoDeTrabalho(); // Não se esqueça de chamar a função!

