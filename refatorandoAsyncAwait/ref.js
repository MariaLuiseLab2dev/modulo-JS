const buscarAtividadeAsync = async () => {
    try {
        // cria uma variavel que vai buscar a Promise da API
        // espera o fetch terminar
        const response = await fetch("https://bored-api.appbrewery.com/random");
        
        // sempre verificar se a response respondeu com erro
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        //se não, pegue as chaves e imprima
        const data = await response.json(); // espera a response vir
        //depois joga as chaves
        console.log("----- DADOS RECEBIDOS -----")
        console.log("Atividade sugerida:", data.activity);
        console.log("Tipo de Atividade:", data.type);
    } catch (error) {
        console.error(`Falha ao executar a busca da API:\n ${error.message}`);
    }
}

buscarAtividadeAsync();