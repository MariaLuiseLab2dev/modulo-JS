function menorNumero() {
    const numeros = [7,-2,3,1,8,7,6];
    let menorNumero = numeros[0];
    // console.log(menorNumero);
    
    for (const numero of numeros) { // para cada número dentro do array numeros
        
        // verificar se o numero é um número e se ele é negativo
        if (isNaN(numero)) {
            console.log("digite APENAS números");
            return;
        }

        if (numero < menorNumero) { // se o numero atual for menor que o menorNumero escolha esse numero como o menor numero da sequencia
            menorNumero = numero;
        }
    }
    console.log(menorNumero);
}

menorNumero();