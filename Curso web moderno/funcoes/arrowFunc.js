let  dobro = function (a) {
    return 2 * a
}
console.log(dobro(7))

dobro = (a) => {
    return 2*a
}
console.log(dobro(7))

dobro = a => 2*a // retorno implicito

console.log(dobro(7))

function Pessoa(){
    this.idade = 0

    setInterval( () =>{
        this.idade++
        console.log((this.idade))
    }, 1000)
}

new Pessoa


let comparaComThis = function (param){
    console.log(this === param)
}
comparaComThis(global)// o this sempre vai apontar pro globaldetro de uma função a menos q seja amarrado com um bind

const obj = {}

comparaComThis = comparaComThis.bind(obj) //amarrando this a o obj
comparaComThis(global)//false
comparaComThis(obj)// true


const obj2 = {}
//na função arrow o this aponta pra o proprio obj pq é mantido em arquivos separados 
let comparaComThisArrow = param => console.log(this=== param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj2) // a arrow function não muda a referencia do this msm com um bind
comparaComThisArrow(obj2)