//Retira uma ou mais coisas de dentro do objeto

const pessoa = {
    nome: 'Eliseu',
    idade: 21,
    contato:{
        celular:88888888,
        email: 'dev.eliseu@gmail.com',
    }
}

const { nome , idade} = pessoa //usando o operador sem atribuição
console.log(nome, idade)

const {nome: names, idade: age} = pessoa // usando operador com atribuição de variável
console.log(names, age)

const { contato: {celular , email}}= pessoa // acessando atributos internos
console.log(celular , email)

//passando o operador destructuring dentro dos parametros, 
//ou seja, ele vai retirar esses dois vallores de dentro do obj passado
//tambem estão setados dois valores padrões para o caso deles n serem passados
function rand({ min = 0, max = 1000}){ 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40, unused: 30}// definindo o obj que será usado
console.log(rand(obj))



//usando o operador agr para retirar o conteudo de dentro de um array
function rand2([ min = 0, max = 1000]){ 
    if(min > max) [min, max] = [max, min] // usando o próprio operador para trocar os valores de min e max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand2([50,40]))// definindo os valores
console.log(rand2([992]))// unico valor.nesse caso ele o identificará como minimo
console.log(rand2([,50]))// ignorando o primeiro
console.log(rand2([]))//obj vazio