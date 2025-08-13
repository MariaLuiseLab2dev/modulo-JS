// 1º - retornar as informações de todos os estados do Brasil
// https://brasilapi.com.br/api/ibge/uf/v1

//2º - retornar as informações de todos os municípios daquele estado
// https://brasilapi.com.br/api/ibge/municipios/v1/{siglaUF}?providers=dados-abertos-br,gov,wikipedia

//3º retornar a latitude e longitude daquela cidade
// https://geocoding-api.open-meteo.com/v1/search?name=NOME+DA+CIDADE

//4º - retornar o clima daquele munícipio
// https://api.open-meteo.com/v1/forecast?latitude=-11.01611&longitude=-68.74806&current_weather=true

/* ------------- Seletores do DOM ------------ */
const opcoesDeUf = document.getElementById("opcoesUF");
const opcoesDeCidades = document.getElementById("opcoesCidades");
const loader = document.getElementById("loader");

const alertCustom = document.getElementById("alertCustom");
const alertMsg = document.getElementById("alertMsg");
const alertCloseBtn = document.getElementById("alertCloseBtn");

const btnBuscarClima = document.getElementById("btnBuscarClima");
const btnVoltar = document.getElementById("btnVoltar");

const containerDeBusca = document.getElementById("containerDeBusca");
const containerDoBotao = document.getElementById("containerDoBotao");
const resultadosContainer = document.getElementById("resultadosContainer");

const climaElementos = {
	temperaturaAtual: document.getElementById("temperaturaAtual"),
	velocidadeVento: document.getElementById("velocidadeVento"),
	direcaoVento: document.getElementById("direcaoVento"),
	ehDia: document.getElementById("ehDia"),
	codigoTempo: document.getElementById("codigoTempo"),
	horarioAtual: document.getElementById("horarioAtual"),
	latitude: document.getElementById("latitude"),
	longitude: document.getElementById("longitude"),
};

/* ---------- Helpers de UI ---------- */
const mostrarLoader = () => loader.classList.add("mostraLoader");
const esconderLoader = () => loader.classList.remove("mostraLoader");

const mostrarAlert = (msg) => {
	alertMsg.innerText = msg;
	alertCustom.classList.remove("escondido");
};

const esconderAlert = () => alertCustom.classList.add("escondido");

const aplicarTemaDiaNoite = (isDay) => {
	const body = document.body;

	// limpa classes antigas
	body.classList.remove("tema-dia", "tema-noite");

	// considera '1' ou true como dia
	const ehDia = String(isDay) === "1" || isDay === true;

	if (ehDia) {
		body.classList.add("tema-dia");
	} else {
		body.classList.add("tema-noite");
	}
};

const formatarHorario = (formatoIso) => {
  const data = new Date(formatoIso + "Z"); // adiciona o Z
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, 
    timeZone: "America/Sao_Paulo"
  }).format(data);
};

/* ---------- Atualização dos dados do clima ---------- */
const atualizaClima = (clima) => {
	const climaAtual = clima.current_weather;
	const climaUnidade = clima.current_weather_units || {};

    aplicarTemaDiaNoite(climaAtual.is_day);

	const maps = {
		temperaturaAtual: `Temperatura Atual: ${climaAtual.temperature}${climaUnidade.temperature || ""}`,
		velocidadeVento: `Velocidade do Vento: ${climaAtual.windspeed}${climaUnidade.windspeed || ""}`,
		direcaoVento: `Direção do Vento: ${climaAtual.winddirection}${climaUnidade.winddirection || ""}`,
		ehDia: climaAtual.is_day === 1 ? "É dia!" : "É noite!" || "",
		codigoTempo: `Código do tempo: ${climaAtual.weathercode}`,
		horarioAtual: "Horário: "+formatarHorario(climaAtual.time) || "",
		latitude: "Latitude: "+clima.latitude || "",
		longitude: "Longitude: "+clima.longitude || "",
	};

    

	for (const chave in maps) {
		const el = climaElementos[chave];
		if (el) {
			el.textContent = maps[chave];
		}
	}
};

/* ---------- Função genérica de fetch com tratamento e transformação em json---------- */
const buscarDadosAPI = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
		const dados = await response.json();
		return dados;
	} catch (error) {
		console.error("Erro ao buscar dados da API:", error);
		throw error;
	}
};

/* ---------- Popula UFs e municípios ---------- */
const buscarUF = async () => {
	try {
		const ufs = await buscarDadosAPI("https://brasilapi.com.br/api/ibge/uf/v1");

		ufs.sort((a, b) => a.nome.localeCompare(b.nome, "pt", { sensitivity: "base" }));

		opcoesDeUf.innerHTML = '<option value="">Selecione o estado</option>';
		opcoesDeCidades.innerHTML = '<option value="">Selecione a cidade</option>';
		opcoesDeCidades.selectedIndex = 0;

		ufs.forEach((uf) => {
			const option = document.createElement("option");
			option.textContent = uf.nome;
			option.value = uf.sigla;
			opcoesDeUf.appendChild(option);
		});

		opcoesDeUf.selectedIndex = 0;

		opcoesDeUf.addEventListener("change", async () => {
			opcoesDeCidades.innerHTML = "<option value=''>Selecione a cidade</option>"; // reset placeholder
			opcoesDeCidades.selectedIndex = 0;
			const ufSelecionada = opcoesDeUf.value;
			if (ufSelecionada) await buscarMunicipios(ufSelecionada);
		});
	} catch (error) {
		console.error(`Falha ao executar a busca da API:\n ${error.message}`);
	}
};

const buscarMunicipios = async (ufSelecionada) => {
	try {
		const cidades = await buscarDadosAPI(
			`https://brasilapi.com.br/api/ibge/municipios/v1/${ufSelecionada}?providers=dados-abertos-br,gov,wikipedia`
		);

		cidades.forEach((cidade) => {
			const opt = document.createElement("option");
			opt.textContent = cidade.nome
				.toLowerCase()
				.replace(/ \(.+\)/g, "")
				.replace(/^./, (c) => c.toUpperCase());

			opt.value = cidade.nome.replace(/ \(.+\)/g, "");
			opcoesDeCidades.appendChild(opt);
		});

		opcoesDeCidades.selectedIndex = 0;
	} catch (error) {
		console.error(`\nFalha ao buscar os municipios:${error.message}`);
	}
};

/* ---------- Geocoding e clima ---------- */
const buscarCoordenadas = async (cidadeSelecionada) => {
	try {
		const countryCode = "BR";
		const dados = await buscarDadosAPI(
			`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cidadeSelecionada)}&country_code=${countryCode}`
		);

		if (!dados.results || dados.results.length === 0) throw new Error("Não existe o array de results, cidade não encontrada");

		const nomeDaCidade = cidadeSelecionada.toLowerCase();
		let coordenadaEncontrada = null;
		const ufSelected = opcoesDeUf.value;

		const localEncontrado = dados.results.find((local) => {
			let cidade = "";
			let uf = "";

			if (local.admin2) cidade = local.admin2.toLowerCase();
			if (local.admin1) uf = local.admin1.toLowerCase();

			return cidade === nomeDaCidade || uf === ufSelected.toLowerCase();
		});

		if (localEncontrado) {
			coordenadaEncontrada = {
				latitude: localEncontrado.latitude,
				longitude: localEncontrado.longitude,
			};
		} else {
			const primeiro = dados.results[0];
			coordenadaEncontrada = { latitude: primeiro.latitude, longitude: primeiro.longitude };
		}

		return coordenadaEncontrada;
	} catch (error) {
		console.error("Erro ao buscar as coordenadas:", error);
		throw error;
	}
};

const buscarClima = async (latitude, longitude) => {
	try {
		const dados = await buscarDadosAPI(
			`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
		);
		return dados;
	} catch (error) {
		console.error("Erro ao buscar clima:", error);
		throw error;
	}
};

/* ---------- Funções de gerenciamento da UI durante o fluxo ---------- */
const prepararUIParaBusca = () => {
	//  usuário não altere durante a busca
	opcoesDeUf.disabled = true;
	opcoesDeCidades.disabled = true;

	// evitar múltiplos cliques
	btnBuscarClima.disabled = true;
	containerDoBotao.classList.add("escondido");

	// mostra o loader
	mostrarLoader();
};

const mostrarResultadosUI = () => {
	// mostra os resultados e o botão voltar
	resultadosContainer.classList.remove("escondido");
	btnVoltar.classList.add("visivel");

	// oculta o loader porque já temos os dados
	esconderLoader();
};

const restaurarUI = () => {
	// reabilita selects e botão de busca
	opcoesDeUf.disabled = false;
	opcoesDeCidades.disabled = false;
	btnBuscarClima.disabled = false;

	// mostra o botão de buscar novamente
	containerDoBotao.classList.remove("escondido");

	// esconde os resultados e o botão voltar
	resultadosContainer.classList.add("escondido");
	btnVoltar.classList.remove("visivel");

	// limpa textos antigos dos resultados
	for (const chave in climaElementos) {
		const el = climaElementos[chave];
		if (el) el.textContent = "";
	}

	// garante que o loader esteja escondido
	esconderLoader();
};

/* ---------- handler principal ---------- */
const iniciarBuscaClima = async () => {
	const selecionouCidade = opcoesDeCidades.value;
	const selecionouUf = opcoesDeUf.value;

	if (!selecionouCidade || !selecionouUf) {
		mostrarAlert("Selecione um estado e cidade antes de buscar o clima.");
		return;
	}

	try {
		// bloqueia UI e mostra loader
		prepararUIParaBusca();

		// busca coordenadas e clima
		const coords = await buscarCoordenadas(selecionouCidade);
		const clima = await buscarClima(coords.latitude, coords.longitude);

		// atualiza os elementos e mostra resultados
		atualizaClima(clima);
		mostrarResultadosUI();
	} catch (error) {
		// em caso de erro, avisa o usuário e restaura a UI
		mostrarAlert("Não foi possível obter o clima. Tente novamente.");
		restaurarUI();
	}
};

/* ---------- Event listeners (limpos) ---------- */

btnBuscarClima.addEventListener("click", iniciarBuscaClima);

// botão voltar: limpa selects e restaura UI
btnVoltar.addEventListener("click", () => {
	opcoesDeUf.value = "";
	opcoesDeCidades.innerHTML = "<option value=''>Selecione a cidade</option>";
	opcoesDeCidades.selectedIndex = 0;

	restaurarUI();
});

// alert close
alertCloseBtn.addEventListener("click", esconderAlert);

// logs úteis para depuração
opcoesDeUf.addEventListener("change", () => console.log("UF escolhida:", opcoesDeUf.value));
opcoesDeCidades.addEventListener("change", () => console.log("Cidade escolhida:", opcoesDeCidades.value));

/* ---------- Inicialização ---------- */
resultadosContainer.classList.add("escondido");

// inicia a busca de UFs
buscarUF();
