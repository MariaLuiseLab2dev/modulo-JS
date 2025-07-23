/**
 * Desafio 3: Menu de Opções
 * Cenário: Você está programando o comportamento de um menu de um editor de texto.
 * Tarefa: Crie uma função chamada executarOpcao que recebe uma opcao 
 * (uma string, como 'arquivo', 'editar', 'ver', 'ajuda'). 
 * Use uma estrutura switch para retornar uma mensagem diferente para cada opção. 
 * Inclua um caso default que retorne "Opção inválida.".
 */

const ARQUIVO = 'arquivo';
const EDITAR = 'editar';
const VER = 'ver';
const AJUDA = 'ajuda';

const gerarMensagemOpcao = (opcao) => `Você clicou em ${opcao}.`;

const executarOpcao = (opcao) => {
    switch (opcao) {
        case ARQUIVO:
            return gerarMensagemOpcao(ARQUIVO);
        case EDITAR:
            return gerarMensagemOpcao(EDITAR);
        case VER:
            return gerarMensagemOpcao(VER);
        case AJUDA:
            return gerarMensagemOpcao(AJUDA);
        default:
            return "Opção inválida.";
    }
}


console.log(executarOpcao(ARQUIVO));
console.log(executarOpcao(EDITAR));
console.log(executarOpcao(VER));
console.log(executarOpcao(AJUDA));