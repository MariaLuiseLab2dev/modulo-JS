const aniversarios = {
  Ana: "Março",
  Bruno: "Janeiro",
  Carla: "Março",
  Daniel: "Abril",
  Eduarda: "Janeiro"
};

const contagem = {};

for (const [_, mes] of Object.entries(aniversarios)) { 
    // if (contagem[mes]) { // se o mês existir
    //     contagem[mes] += 1; // contagem recebe ele mesmo + 1 
    // } else {
    //     contagem[mes] = 1; // contagem recebe 1
    // }

    // evite ter else! inverte lógica faça o não primeiro, atribua 0 e depois some + 1
    if(!contagem[mes]) {
        contagem[mes] = 0;
    }
    // adiciona 1 na contagem
    contagem[mes] += 1;
}
console.log(contagem);

