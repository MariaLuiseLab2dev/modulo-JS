function processarPedidos() {
    const produtos = [
        { nome: "Dipirona", quantidade: 50 }, // aprovado
        { nome: "Paracetamol", quantidade: 30 },
        { nome: "Amoxicilina", quantidade: 10 },
        { nome: "Ibuprofeno", quantidade: 5 }
    ];
    
    //ver dps oq é reduce (acumlar oq tem no array em um valor)
    const prod = produtos.reduce((acc, produto) => {
        // console.log(acc);
        acc[produto.nome] = produto;
        return acc;
    }, {});

    console.log(prod);

    const pedidos = [
        { nome: "Dipirona", quantidade: 20 },
        { nome: "Paracetamol", quantidade: 35 },
        { nome: "Amoxicilina", quantidade: 5 },
        { nome: "Omeprazol", quantidade: 10 },
        { nome: "Ibuprofeno", quantidade: 5 }
    ];

    const pedidosAprovados = [];
    const pedidosReprovados = [];

    for (const pedido of pedidos) {
        // adaptar para um objeto 
        const produto = prod[pedido.nome];
        if (!produto) {
            console.log(`Produto ${pedido.nome} não existe no estoque.`);
            pedidosReprovados.push(pedido.nome);
            continue; // vai pro prox
        }
        console.log(`O produto ${produto.nome} existe`);

        if ((pedido.quantidade <= produto.quantidade)) { // se tem a quantidade exigida 
            console.log(`Pedido ${pedido.nome} aceito!`);
            pedidosAprovados.push(pedido.nome);
            produto.quantidade -= pedido.quantidade;
        } else {
            console.log(`Pedido ${pedido.nome} recusado pois a quantidade é insuficiente.`);
            pedidosReprovados.push(pedido.nome);
        }
    }
    console.log("Pedidos aprovados:");
    console.log(pedidosAprovados);

    console.log("\nPedidos reprovados:");
    console.log(pedidosReprovados);

    console.log("\nEstoque de Produtos:");
    console.log(produtos);
}

processarPedidos();