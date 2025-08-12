// 1º - retornar as informações de todos os estados do Brasil
// https://brasilapi.com.br/api/ibge/uf/v1

//2º - retornar as informações de todos os municípios daquele estado
// https://brasilapi.com.br/api/ibge/municipios/v1/{siglaUF}?providers=dados-abertos-br,gov,wikipedia

//3º retornar a latitude e longitude daquela cidade
// https://geocoding-api.open-meteo.com/v1/search?name=NOME+DA+CIDADE

//4º - retornar o clima daquele munícipio
// https://api.open-meteo.com/v1/forecast?latitude=-11.01611&longitude=-68.74806&current_weather=true


const alertCustom = document.getElementById("alertCustom");
const alertMsg = document.getElementById("alertMsg");
const alertCloseBtn = document.getElementById("alertCloseBtn");

function mostrarAlert(msg) {
  alertMsg.innerText = msg;
  alertCustom.classList.remove("escondido");
}

function esconderAlert() {
  alertCustom.classList.add("escondido");
}

alertCloseBtn.addEventListener("click", esconderAlert);


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

        ufs.sort((a, b) =>  
            a.nome          
            .localeCompare( b.nome, 
                            'pt', 
                            { sensitivity: 'base' }));

        // placeholder antes de popular
        opcoesDeUf.innerHTML = '<option value="">Selecione o estado</option>';
        // também garante placeholder nas cidades
        opcoesDeCidades.innerHTML = '<option value="">Selecione a cidade</option>';
        opcoesDeCidades.selectedIndex = 0;

        ufs.forEach(uf => {
            let option = document.createElement('option');
            option.textContent = uf.nome;
            option.value = uf.sigla;
            opcoesDeUf.appendChild(option);
        });

        // garante que o placeholder esteja selecionado
        opcoesDeUf.selectedIndex = 0;

        // quando o usuário mudar o valor do estado traga as cidades daquele estado
        opcoesDeUf.addEventListener('change', async () => {
            opcoesDeCidades.innerHTML = '<option value="">Selecione a cidade</option>'; // Reset placeholder
            opcoesDeCidades.selectedIndex = 0; // Força a seleção do placeholder
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

        opcoesDeCidades.selectedIndex = 0; // Garante que o primeiro clique sempre funciona
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

        // transformo a cidade em minúsculo para comparação
        const nomeDaCidade = cidadeSelecionada.toLowerCase();

        //crio uma coordenada
        let coordenadaEncontrada = null; 

        // pego a ufSelecionada
        let ufSelected = opcoesDeUf.value;

        const localEncontrado = dados.results.find(local => {
            let cidade = "";
            let uf = "";

            if(local.admin2) { // se existir admin2/nome da cidade
                cidade = local.admin2.toLowerCase();
            }

            if(local.admin1) { // se existir admin1/nome do estado 
                uf = local.admin1.toLowerCase();
            }

            if(cidade === nomeDaCidade) return true; // se tiver a cidade

            if(uf === ufSelected.toLowerCase()) return true; // se tiver a uf

            return false;
        });

        // se não tem admin2 nem admin1, pega o primeiro
        if (localEncontrado) {
            coordenadaEncontrada = {
            latitude: localEncontrado.latitude,
            longitude: localEncontrado.longitude 
            }
        } else {
            const primeiro = dados.results[0];
            coordenadaEncontrada = {
            latitude: primeiro.latitude,
            longitude: primeiro.longitude
            }
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

const loader = document.getElementById("loader");
const containerDeBusca     = document.getElementById("containerDeBusca");
const containerDoBotao     = document.getElementById("containerDoBotao");
const resultadosContainer  = document.getElementById("resultadosContainer");

const mostrarLoader = () => loader.classList.add("mostraLoader");

const esconderLoader = () => loader.classList.remove('mostraLoader');

const btnVoltar = document.getElementById("btnVoltar");

btnVoltar.addEventListener("click", () => {
    opcoesDeUf.value = "";
    opcoesDeCidades.innerHTML = '<option value="">Selecione a cidade</option>';
    opcoesDeCidades.selectedIndex = 0; // retorna -1 se nenhum for selecionado
    
    // Limpar resultados
    document.getElementById("temperaturaAtual").innerText = "";
    document.getElementById("velocidadeVento").innerText = "";

    resultadosContainer.classList.add("escondido"); // adiciono os resultados
    containerDeBusca.classList.remove("escondido"); // removo o container de busca
    containerDoBotao.classList.remove("escondido"); // removo o container do botão
});

botaoBuscarClima.addEventListener("click", async () => {

    const selecionouCidade = opcoesDeCidades.value;
    const selecionouUf = opcoesDeUf.value;

    if (!selecionouCidade || !selecionouUf) {
        mostrarAlert("Selecione um estado e cidade antes de buscar o clima.");
        return;
    }

    try {
        const coords = await buscarCoordenadas(selecionouCidade);
        console.log("Coordenadas encontradas:", coords);

        // esconde a div de busca e botão
        containerDeBusca.classList.add("escondido");
        containerDoBotao.classList.add("escondido");

        // mostra o loader 
        resultadosContainer.classList.remove("escondido"); // remove os resultados anteriores
        btnVoltar.classList.remove("visivel"); // remove o botão de voltar antes
        loader.classList.add("mostraLoader"); 

        // pego o clima
        const clima = await buscarClima(coords.latitude, coords.longitude);

        const temperatura = document.getElementById("temperaturaAtual");
        temperatura.innerText = `${clima.temperature}°C`;
        const velocidadeVento = document.getElementById("velocidadeVento");
        velocidadeVento.innerText = `Velocidade do vento: ${clima.windspeed} km/h`;

        btnVoltar.classList.add("visivel"); // mostra o voltar
    } catch (error) {
        mostrarAlert("Não foi possível obter o clima. Tente novamente.");
    } finally {
        loader.classList.remove("mostraLoader"); // tira o loader quando terminar tudo
    }
});

buscarUF();