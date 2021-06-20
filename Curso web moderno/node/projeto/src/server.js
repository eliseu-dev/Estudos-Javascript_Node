const porta =3003
const express = require(express)
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco:4999.99}) // send converte para JSON automaticamente
})