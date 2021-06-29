const express = require("express");
const app = express();


app.get("/", (req,res)=>{
    res.send("<h1>Rumo ao primeiro job backend :D</h1>")
})

app.get("/hello/:nome?", (req, res) => {
    const nome = req.params.nome
    if(nome){
        res.send(`<h1>Olá ${nome}, pronto pra codar?</h1>`)
    }else{
        res.send(`<h1>Olá amigo, pronto pra codar?</h1>`)
    }
})


app.listen(4000, function (erro) {
    if(erro){
        console.log("ocorreu um erro")
    }else{
        console.log("Servidor online")
    }
})