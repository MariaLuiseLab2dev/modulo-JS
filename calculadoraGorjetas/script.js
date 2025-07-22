const inputValorConta = document.getElementById("valor-conta");
const inputPorcentagemGorjeta = document.getElementById("porcentagem-gorjeta");
const btnCalcular = document.getElementById("btn-calcular");
const resultadoGorjeta = document.getElementById("resultado-gorjeta");
const resultadoTotal = document.getElementById("resultado-total");

const calcularGorjeta = () => {
    const valorBruto = inputValorConta.value.trim().replace(",", ".");
    const porcentagemBruta = inputPorcentagemGorjeta.value.trim().replace(",", ".");
    
    // Valida primeiro
    const regexNumero = /^\d+(\.\d+)?$/;

    if (!regexNumero.test(valorBruto) || !regexNumero.test(porcentagemBruta)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Converte
    const valorDaConta = parseFloat(valorBruto);
    const valorDaporcentagem = parseFloat(porcentagemBruta);

    // Faz a conta
    const valorDaGorjeta = valorDaConta * (valorDaporcentagem / 100);
    const valorTotal = valorDaConta + valorDaGorjeta;

    // Expõe o resultado
    resultadoGorjeta.innerText = `Gorjeta: R$ ${valorDaGorjeta.toFixed(2)}`;
    resultadoTotal.innerText = `Total com gorjeta: R$ ${valorTotal.toFixed(2)}`;
};

btnCalcular.addEventListener('click', calcularGorjeta);
