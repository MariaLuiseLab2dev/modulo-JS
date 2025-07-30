const configDesordenada = {
  'USER_NAME': 'admin',
  '$user$': 'admin',
  '_juca$lica': '123',
  'user__email': 'admin@test.com',
  'Max-Connections': 10,
  'enable_logging': true
};

// em vez de negar o regex, coloca o traço ou underline
// ver o que vem no indice 0 e no indice.lenght

const configOrdenada = {};

for (const chave of Object.keys(configDesordenada)) { // chave das keys de configDesordenada
	// pegar a propriedade
	let palavra = chave; 
	console.log(palavra); // palavras desordenadas
	
	let formatacaoPalavra = palavra
		.replace(/^[-_$]+|[-_$]+$/g, '') // pegue toda a string que tiver no inicio ou no fim -_$ e substitua por nada ''
		.toLowerCase()
		.replace(/[-_$]+([a-zA-Z0-9])/g, (_, letra ) => letra.toUpperCase()); // underline pra uma var q n vai usar

	console.log(formatacaoPalavra); // paralavras formatadas
	configOrdenada[formatacaoPalavra] = configDesordenada[chave]; // cria uma nova chave e atribui o valor 
}
console.log(configOrdenada);
