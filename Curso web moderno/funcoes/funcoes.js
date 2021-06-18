//função que retorna função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)

function adjetivar(adj){
    return function (string){
        return string + " " + adj;
    };
}
const adjetivando = adjetivar("Lindo")
console.log(adjetivando("Eliseu"))

