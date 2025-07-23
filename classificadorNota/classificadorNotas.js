/**
 * Desafio 2: Sistema de Classificação de Notas
 * Cenário: Você precisa automatizar a atribuição de notas em uma plataforma de ensino.
 * Tarefa: Crie uma função chamada classificarNota que recebe uma nota (um número de 0 a 100). Use uma cadeia if/else if/else para retornar a letra correspondente, seguindo estas regras:
 * 90-100: "A"
 * 80-89: "B"
 * 70-79: "C"
 * 60-69: "D"
 * Abaixo de 60: "F"
 * 
 */

const nota = 40;

const classificarNota = (nota) => {
    if (isNaN(nota) || nota < 0 || nota > 100) {
        return "[ERRO] A nota deve ser um número entre 0 e 100"
    }

    if (nota >= 90) {
        return (`O valor da nota é ${nota} - nota A`);
    } else if (nota >= 80){
        return (`O valor da nota é ${nota} - nota B`);
    } else if (nota >=70) {
        return (`O valor da nota é ${nota} - nota C`);
    } else if (nota >= 60) {
        return (`O valor da nota é ${nota} - nota D`);
    } else {
        return (`O valor da nota é ${nota} - nota F`);
    }    
}

const verificarNota = () => {
    const nota = Number(document.getElementById('nota').value.trim());
    const resultado = classificarNota(nota);
    document.getElementById("resultado").textContent = resultado;
    console.log(resultado);
};
