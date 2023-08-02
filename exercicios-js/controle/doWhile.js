function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (min - max) + max
    return Math.floor(valor)
}

// let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção foi ${opcao}`)
} while (opcao != -1)

// Diferente de while, 'do while' não requer iniciar a variavel antes de executar

console.log('Fim!')