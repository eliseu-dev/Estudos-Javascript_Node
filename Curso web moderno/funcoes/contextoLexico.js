const valor = 'global'

function minhaFunc(){
    console.log(valor)
    
}

function exec(){
    const valor = "local"
    
    minhaFunc()
}
exec()


function exec2(){
    const valor = "local"
    function minhaFunc2(){
        console.log(valor)
    }
    minhaFunc2()
}
exec2()