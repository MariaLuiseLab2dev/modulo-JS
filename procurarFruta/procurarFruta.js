//1 - Exercicio de procurar um elemento dentro de um array, 
// procure uma fruta dentro do array frutas

const procurarFruta = () => {
    const frutas = ["Maçã ", "Banana", "Laranja", "Morango"];

    let frutaQuerida = "Banana";

    for (let index = 0; index < frutas.length; index++) { // percorra todo o array
        if (frutaQuerida.toLowerCase() === frutas[index].toLowerCase()) {
            console.log(`Achou a fruta ${frutas[index]}!`);
            return;
        }
    }
    console.log(":( que pena, você não achou a fruta.");
}

procurarFruta();
