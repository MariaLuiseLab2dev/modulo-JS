// 1º - retornar as informações de todos os estados do Brasil
// https://brasilapi.com.br/api/ibge/uf/v1

//2º - retornar as informações de todos os municípios daquele estado
// https://brasilapi.com.br/api/ibge/municipios/v1/{siglaUF}?providers=dados-abertos-br,gov,wikipedia

//3º retornar a latitude e longitude daquela cidade
// https://geocoding-api.open-meteo.com/v1/search?name=NOME+DA+CIDADE

//4º - retornar o clima daquele munícipio
// https://api.open-meteo.com/v1/forecast?latitude=-11.01611&longitude=-68.74806&current_weather=true


const opcoesDeUf = document.querySelector('#opcoesUF');
let ufSelecionada = opcoesDeUf.value;

// Popular as opções com a API
const buscarUF = async () => {
    try {
        const response = await fetch("https://brasilapi.com.br/api/ibge/uf/v1");
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const ufs = await response.json();

        ufs.forEach(uf => {
            let option = document.createElement('option');
            option.textContent = uf.nome; 
            option.value = uf.sigla;
            opcoesDeUf.appendChild(option);
        });
    } catch (error) {
        console.error(`Falha ao executar a busca da API:\n ${error.message}`);
    }
}


const buscarMunicipios = async (ufSelecionada) => {
    try {
        console.log("Estado escolhido pelo usuário: ", ufSelecionada);
        const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${ufSelecionada}?providers=dados-abertos-br,gov,wikipedia`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);        
        }

        const cidades = await response.json();

        // console.log(cidades);

        cidades.forEach(cidade => {
            let option = document.createElement('option');
            option.textContent = cidade.nome.replace(/[ (]\w+[A-ZÁÃÉÍÓÕÔÚÂÊÎÔÛÀÃÕÇ]+[)]/g, "");
            option.value = cidade.nome.replace(/[ (]\w+[A-ZÁÃÉÍÓÕÔÚÂÊÎÔÛÀÃÕÇ]+[)]/g, "");
            opcoesDeCidades.appendChild(option);
        });
    } catch(error) {
        console.error(`Falha ao executar a busca da API:\n ${error.message}`);
    }
}

// quando o usuário mudar o valor do estado modifique as cidades
opcoesDeUf.addEventListener('change', async () =>{ 
    opcoesDeCidades.innerHTML = ''; // limpa as opcoes de cidade toda vez q clica
    let ufSelecionada = opcoesDeUf.value;
    await buscarMunicipios(ufSelecionada);
});

const opcoesDeCidades = document.getElementById('opcoesCidades');

const botaoBuscarClima = document.getElementById("btnBuscarClima");

botaoBuscarClima.addEventListener("click", () => {
        const cidadeSelecionada = opcoesDeCidades.value;
        console.log("Cidade escolhida pelo usuário:", cidadeSelecionada);
        const countryCode = "BR";
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cidadeSelecionada}&countryCode=${countryCode}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); 
            }
            return response.json();
        })
        .then(cidades => {
            // countryCode -> BR
            //admin2 === name
            // caso para São Paulo pega o primeiro
            //como pegar o estado?
            //results é um array
            console.log(cidades.results);
            
        });
});

buscarUF();