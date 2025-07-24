/**
 * 
 * Desafio 1: Verificador de Elegibilidade
 * Cenário: Você está criando a lógica para um sistema de aluguel de carros. 
 * Crie uma função chamada verificarElegibilidade que recebe dois argumentos: 
 * idade (um número) e possuiCNH (um booleano).
 * Tarefa: Usando uma estrutura if/else if/else, 
 * a função deve retornar uma das seguintes strings:
 * "Pode alugar e dirigir." (se a idade for 21 ou mais E possuiCNH for true).
 * "Pode dirigir, mas não alugar." (se a idade for entre 18 e 20 E possuiCNH for true).
 * "Não pode dirigir." (em todos os outros casos).
 * 
 */

//APLICAR GAURD CLAUSE

function verificarElegibilidade() {
    let idade = Number(document.getElementById("idade").value.trim());
    let opcaoSelecionadaCNH = document.querySelector('input[name="CNH"][value="Sim"]:checked'); // verifica se um valor Sim está checado

    //Não possui CNH?
    if (!opcaoSelecionadaCNH) {
        document.getElementById("resultado").textContent = "Não pode dirigir.";
        return;
    }

    // possui CNH? 
    if (idade >= 21) {
        document.getElementById("resultado").textContent = "Pode alugar e dirigir!";
        return;
    }

    if(idade >= 18) {
        document.getElementById("resultado").textContent = "Pode dirigir mas não pode alugar!";
        return;
    }
}
    

