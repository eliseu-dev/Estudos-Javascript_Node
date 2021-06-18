

function criarProduto(id, nome, preco, desconto = 0.1){
    preco -= (preco*desconto)
    return produto[id] = {
        nome,
        preco,
        desconto
    }
}
let produto= []// pode declarar isso aqui???
console.log(criarProduto(1,"Notebook", 4999.49))
console.log(criarProduto(2,"Mac", 5999.49,0.2))
console.log(produto[1].nome)
console.log(produto[2].nome)
console.log(typeof(produto))