const promise1 = fetch("https://bored-api.appbrewery.com/random");
const promise2 = fetch("https://bored-api.appbrewery.com/random");
const promise3 = fetch("https://bored-api.appbrewery.com/random");

// passa as responses das três promises como parâmetro e espera
Promise.all([promise1, promise2, promise3]) 
.then((responses) => { // quando estiverem prontas
    // console.log(responses);
    return Promise.all(responses 
        .map(res => res.json())); // para cada response do array, transforme ele em json
})
.then(data => { // pego os json e imprimo
    console.log(data[0], data[1], data[2]);
})
.catch(error => { // se qualquer fetch ou json() falha
    console.log("Uma das promises falhou: ", error);
});

