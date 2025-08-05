// function buscarUsuarioLegacy(id, callbackSucesso, callbackErro) {
//   console.log(`Iniciando a busca pelo usuário com ID: ${id}...`);

//   // Simula a latência da rede com setTimeout
//   setTimeout(() => {
//     // Lógica para simular sucesso ou falha
//     const sucesso = Math.random() > 0.5; // 50% de chance de sucesso

//     if (sucesso) {
//       const data = {
//         id: id,
//         nome: `Usuário ${id}`,
//         email: `usuario${id}@exemplo.com`,
//       };

//       const status = "Sucesso";
//       // É invocada a primeira callback em caso de sucesso
//       callbackSucesso(data, status);
//     } else {
//       const error = {
//         message: `Erro ao buscar o usuário ${id}. Tente novamente.`
//       };
//       // É invocada a segunda callback em caso de falha
//       callbackErro(error);
//     }
//   }, 2000); // Simula 2 segundos de espera
// }

// buscarUsuarioLegacy(
//   1,
//   (dados, status) => {
//     console.log("Usuário encontrado:", dados, "Status:", status);
//   },
//   (erro) => {
//     console.error("Erro:", erro.message);
//   }
// );

const buscarUsuarioPromise = ((id) => {
    return new Promise((resolve, reject) => {

        if (isNaN(id) || id <= 0 || !Number.isInteger(id)) { // verificar se o id é um número, um double ou um número negativo
            return reject({ mensagem: "id inválido." });
        }
        setTimeout(() => {
            const sucesso = Math.random() > 0.5; 
            if (sucesso) { // se o número aleatorio for maior q 0.5
                const dados = { // cria o objeto com o acesso do usuario
                    id: id,
                    nome: `Usuário ${id}`,
                    email: `usuario${id}@exemplo.com`,
                    status: "Sucesso"
                };
                // chama a função de callback resolve - caso de sucesso
                resolve(dados); 
            } else { // se não for maior
                const error = {
                    mensagem: `Erro ao buscar o usuário ${id}. Tente novamente.`
                };
                // É invocada a segunda callback em caso de falha
                reject(error);
            }
        }, 2000);
    });
});

buscarUsuarioPromise(2.3)
    .then(resposta => { // quando mensagem, dados e status estiverem prontos
        console.log(resposta);              
    })
    .catch((erro) => { // erro que pega no reject 
        console.error(erro.mensagem);         // "Erro ao buscar o usuário 5. Tente novamente."
    });

buscarUsuarioPromise(8)
.then(resposta => console.log(resposta))
.catch(erro => console.log(erro.mensagem));

const exibirUsuario = async (id) => { // essa funcao é asincrona
    try {
        let resposta = await buscarUsuarioPromise(id); //espera buscar o usuario
        console.log(resposta);
    } catch (error) {
        console.error(error.mensagem);
    }
}

exibirUsuario(10);

// estudo: Auth2 e OData