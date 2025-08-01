const buscarAtividadeThen = () => {
    // primeiro faz o fetch chamando a API e retorna uma Promise com a resposta
    fetch("https://bored-api.appbrewery.com/random")
    .then(response => { // quando a promise for resolvida, pega a response dessa api
        if(!response.ok) { // verifica se tem um erro 400
            throw new Error(`Erro de HTTP! Status: ${response.status}`);
        }
        return response.json(); // retorna o valor da response em JSON
    })
    .then(data => { // pega o valor em json e joga no console
        console.log(`Activity: ${data.activity}\nType: ${data.type}`); 
    })
    .catch(error => { // se der erro ao buscar a API, ele pega e imprime no console
        console.error("Falha ao buscar as informações: ", error);
    })
}
buscarAtividadeThen();
console.log("oioi");