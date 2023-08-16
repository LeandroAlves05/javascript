const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    // obter mulher chinesa com menor salario
    
    let chines = null
    for(i of funcionarios){
        if (i.pais == "China" && i.genero == "F"){
            if(chines == null){
                chines = i
            } else{
                if (chines.salario > i.salario){
                    chines = i
                }
            }
        }
    }
    console.log(chines)
})