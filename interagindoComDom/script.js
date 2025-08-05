/**
 * Desafio 1: 
 * Mudar o Título e a Descrição Assim que a página carregar, seu script deve:
 * Selecionar o h1 com o ID titulo-principal 
 * e mudar seu texto para "Bem-vindo ao Mundo do DOM!".
 * Selecionar o parágrafo com a classe descricao 
 * e mudar sua cor de texto para purple.
 * 
 */
const titulo = document.querySelector('#titulo-principal');
const descricao = document.querySelector('.descricao');

const mudandoTituloDescricao= () => {
    titulo.textContent = "Bem-vindo ao Mundo do DOM!";
    descricao.style.color = 'grey'; 
    return titulo, descricao;
}

mudandoTituloDescricao();

/**
 * Desafio 2: Botão de "Toggle" Faça o botão com o ID btn-toggle funcionar.
 * Selecione o botão e a div com o ID caixa-alerta.
 * Adicione um addEventListener para o evento de click no botão.
 * Dentro da função do evento, use classList.toggle('escondido') 
 * na div da caixa de alerta. Isso fará com que a caixa apareça 
 * e desapareça a cada clique.
 */

const botaoMostrarEsconder = document.getElementById('btn-toggle');
const divCaixaAlerta = document.getElementById('caixa-alerta');

const esconderDivComBotao = () => {
    divCaixaAlerta.classList.toggle('escondido');
}

botaoMostrarEsconder.addEventListener('click', esconderDivComBotao);

/**
 * Desafio 3 : Lista de Tarefas Interativa Faça a lista de tarefas funcionar.
 * Selecione 
 * - o campo input
 * - o botão btn-adicionar
 * - a lista ul.
 * Adicione um addEventListener de click ao botão.
 * Dentro da função do evento: 
 * a. Pegue o texto digitado no campo input (use a propriedade .value). 
 * b. Verifique se o texto não está vazio. 
 * c. Se não estiver vazio, crie um novo elemento <li>. 
 * d. Defina o textContent do novo <li> com o valor do input. 
 * e. Adicione o novo <li> à lista <ul> usando append().  
 * Limpe o campo de input, definindo seu valor para uma string vazia ('').

 */

const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const lista = document.getElementById('lista-tarefas');

const adicionarElemento = () => {
    if ((inputTarefa).value.trim()) {
        const novoItem = document.createElement('li');
        novoItem.textContent = inputTarefa.value;
        lista.append(novoItem);
        inputTarefa.value ='';
    }
}

btnAdicionar.addEventListener('click',adicionarElemento);