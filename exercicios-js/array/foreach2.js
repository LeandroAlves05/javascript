const forEach2 = (nome, indice) => {
    for (let aprovado in aprovados) {
        console.log(nome, indice)
    }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}