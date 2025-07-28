const carro = {    // Carro é o objeto
  cor: 'vermelho', // cor, ano e modelo são as chaves
  ano: 2023,       // "vermelho", 2023 e "Sedan" são os valores
  modelo: 'Sedan'
};

// ACESSANDO POR PONTO
console.log(carro.cor);
console.log(carro.ano);
console.log(carro.modelo);

//ACESSANDO POR COLCHETES
const propriedadeDesejada = 'nome';
const pessoa = { nome: "Carlos", idade: 42 };
console.log(pessoa[propriedadeDesejada]); // Saída: "Carlos"

//ACESSANDO CHAVES COM ESPAÇO E HIFENS
const relatorio = {
  'total de vendas': 5000,
  'cliente-id': 'xyz-123'
};
console.log(relatorio['total de vendas']); // Saída: 5000

//objeto PESSOA com funções dentro de cada propriedade
const aluno = {
  nome: "Ana",
  idade: 30,
  apresentarSe: function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  },
  comemorarAniversario: function() {
    this.idade += 1;
    console.log(`Feliz aniversário! Agora eu tenho ${this.idade} anos.`);
  }
};

aluno.apresentarSe(); // Saída: Olá, meu nome é Ana e eu tenho 30 anos
aluno.comemorarAniversario(); // Saída: Feliz aniversário! Agora eu tenho 31 anos

// COMO FUNCIONA O OBJECT.KEYS(MEUOBJETO)
// Nosso objeto representa o inventário de um personagem
const inventario = {
  pocoes: 4,
  espada: 1,
  escudo: 1,
  moedas: 157
};

// Vamos usar Object.keys() para ver quais tipos de itens temos
const itensNoInventario = Object.keys(inventario);

console.log(itensNoInventario);
// Saída esperada no console: ['pocoes', 'espada', 'escudo', 'moedas']

// ITERAÇÃO NO MUEOBJETO
// A variável 'itensNoInventario' contém o array ['pocoes', 'espada', 'escudo', 'moedas']
console.log("Itens no inventário:");
for (const item of itensNoInventario) {
  // A cada iteração, a variável 'item' será uma das chaves: 'pocoes', depois 'espada', etc.
  console.log(`- ${item}`);
}

// EXTRAINDO OS VALORES DO OBJETO

const quantidadesNoInventario = Object.values(inventario);

console.log(quantidadesNoInventario);
// Saída esperada no console: [ 4, 1, 1, 157 ]
