const notas = [7.2 , 7.3, 7.4, 8.9, 9.5, 10.0]

//sem callback
const  seteEhDez = []
for (let i in notas){
    if(notas[i]<8){
        seteEhDez.push(notas[i])
    }
}

console.log(seteEhDez)



const seteEhDez2 = notas.filter((nota)=> nota<8)

console.log(seteEhDez2)