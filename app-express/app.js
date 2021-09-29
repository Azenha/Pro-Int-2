const express = require('express')
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Olá mundo!</h1>');
})

app.get('/hello', (req, res) => {
    let nome = "Mundo";
    if (req.query && req.query.nome) {
        nome = req.query.nome;
    }
    res.send(`<h1>Olá ${nome}!</h1>`);
})

app.get("/produtos", (req, res) => {
    const produto = new Object();
    produto.id = 1,
        produto.nome = "Produto 1",
        produto.preco = 30;

    res.json(produto)
})

app.listen(porta, () => {
    console.log(`Iniciando a aplicação na porta ${porta}`);
})