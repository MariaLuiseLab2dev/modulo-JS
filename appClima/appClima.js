// 1º - retornar as informações de todos os estados do Brasil
// https://brasilapi.com.br/api/ibge/uf/v1

//2º - retornar as informações de todos os municípios daquele estado
// https://brasilapi.com.br/api/ibge/municipios/v1/{siglaUF}?providers=dados-abertos-br,gov,wikipedia

//3º retornar a latitude e longitude daquela cidade
// https://geocoding-api.open-meteo.com/v1/search?name=NOME+DA+CIDADE

//4º - retornar o clima daquele munícipio
// https://api.open-meteo.com/v1/forecast?latitude=-11.01611&longitude=-68.74806&current_weather=true


const opcoesDeUf = document.getElementById("opcoesUF");
const ufSelecionada = opcoesDeUf.value;
// na mudança de estado 
opcoesDeUf.addEventListener('change', () => {
  console.log('UF escolhida:', opcoesDeUf.value);
});


const opcoesDeCidades = document.getElementById('opcoesCidades');
const cidadeSelecionada = opcoesDeCidades.value;
// na mudança de cidade
opcoesDeCidades.addEventListener('change', () => {
  console.log('Cidade escolhida:', opcoesDeCidades.value);
});

const botaoBuscarClima = document.getElementById("btnBuscarClima");

const resultadoClimaDaCidade = document.getElementById("resultadoClima");

const buscarDadosAPI = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
        const dados = await response.json();
        return dados;
    } catch(error) {
        console.error("Erro ao buscar dados da API:", error);
        throw error;
    }
};

// Popular as opções com a API
const buscarUF = async () => {
    try {

        const ufs = await buscarDadosAPI("https://brasilapi.com.br/api/ibge/uf/v1");

        ufs.sort((a, b) =>  //  sorteie duas palavras
            a.nome          // pelo nome
            .localeCompare( b.nome, // compare com o nome que vem depois dele
                            'pt', // idioma portugues
                            { sensitivity: 'base' })); // ignore acento, maiusculo e minusculo

        ufs.forEach(uf => {
            let option = document.createElement('option');
            option.textContent = uf.nome;
            option.value = uf.sigla;
            opcoesDeUf.appendChild(option);
        });

        // quando o usuário mudar o valor do estado traga as cidades daquele estado
        opcoesDeUf.addEventListener('change', async () => {
            opcoesDeCidades.innerHTML = ''; // limpa as opcoes de cidade toda vez q clica
            let ufSelecionada = opcoesDeUf.value;
            if (ufSelecionada) { await buscarMunicipios(ufSelecionada); }
        });
    } catch (error) {
        console.error(`Falha ao executar a busca da API:\n ${error.message}`);
    }
};


const buscarMunicipios = async (ufSelecionada) => {
    try {
        const cidades = await buscarDadosAPI(`https://brasilapi.com.br/api/ibge/municipios/v1/${ufSelecionada}?providers=dados-abertos-br,gov,wikipedia`);

        cidades.forEach(cidade => {
            let opt = document.createElement('option');
            opt.textContent = cidade.nome
            .toLowerCase() // deixa tudo minúsculo
            .replace(/ \(.+\)/g, "") // remove oq está entre os parenteses
            .replace(/^./, c => c.toUpperCase()); // pegue apenas o primeiro caractere e deixe em maiúsculo
            opt.value = cidade.nome.replace(/ \(.+\)/g, "");
            opcoesDeCidades.appendChild(opt);
        });
    } catch (error) {
        console.error(`\nFalha ao buscar os municipios:${error.message}`);
    }
};

const buscarCoordenadas = async (cidadeSelecionada) => {
    try {
        const countryCode = "BR";
        const dados = await buscarDadosAPI(`https://geocoding-api.open-meteo.com/v1/search?name=${cidadeSelecionada}&country_code=${countryCode}`);

        // verifico se tem a propriedade results e que ela é maior que 0
        if (!dados.results || dados.results.length === 0) { throw new Error("Não existe o array de results, cidade não encontrada"); }

        // transformo a cidade em minúsculo
        const nomeDaCidade = cidadeSelecionada.toLowerCase();

        // crio um Array para pegar o resultado
        const arrayCoordenadas = [];

        //crio uma coordenada
        let coordenadaEncontrada = null; 

        dados.results.forEach(cidade => {
            // admin2 === nomeDaCidade?
            if (cidade.admin2 && cidade.admin2.toLowerCase() === nomeDaCidade) {
                coordenadaEncontrada = {
                    latitude: cidade.latitude,
                    longitude: cidade.longitude
                };
            }

            // admin1 === nomeDaCidade?
            if (cidade.admin1 && cidade.admin1.toLowerCase() === nomeDaCidade) {
                coordenadaEncontrada = {
                    latitude: cidade.latitude,
                    longitude: cidade.longitude
                };
            }
        });

        // se não tem admin2 nem admin1, pega o primeiro (São Paulo)
        if (coordenadaEncontrada == null) {
            // exemplo: pega apenas a primeira entrada do array
            const primeiro = dados.results[0];
            coordenadaEncontrada = {
                latitude: primeiro.latitude,
                longitude: primeiro.longitude
            };
        }
        
        return coordenadaEncontrada;  
    } catch (error) {
        console.error("Erro ao buscar as coordenadas:", error);
        throw error;
    }
}

const buscarClima = async (latitude, longitude) => {
    try {
        const dados = await buscarDadosAPI(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        return dados.current_weather;
    } catch (error) {
        console.error("Erro ao buscar clima:", error);
        throw error;
    }
}


botaoBuscarClima.addEventListener("click", async () => {
    const selecionouCidade = opcoesDeCidades.value;
    
    if (!selecionouCidade) {
        alert("Selecione uma cidade antes de buscar o clima.");
        return;
    }

    try {
        // pego as coordenadas
        const coords = await buscarCoordenadas(selecionouCidade);
        console.log("Coordenadas encontradas:", coords);

        // pego o clima
        const clima = await buscarClima(coords.latitude, coords.longitude);

        // exibir no index.html
        resultadoClimaDaCidade.innerHTML = (`
        <p>Temperatura atual: ${clima.temperature}°C</p>
        <p>Velocidade do vento: ${clima.windspeed} km/h</p>
        `);
    } catch (error) {
        alert("Não foi possível obter o clima. Tente novamente.");
    }
});

buscarUF();