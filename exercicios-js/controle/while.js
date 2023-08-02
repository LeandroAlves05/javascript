function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * ( max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let alt = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log("A opçao foi " + opcao)
    alt++
}

console.log(`Ufa! foram precisas ${alt} alternativas`)