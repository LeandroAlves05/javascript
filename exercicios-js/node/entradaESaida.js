const anonimo = process.argv.indexOf("-a") !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write("Salve Anonimo :D\n")
    process.exit()
} else {
    process.stdout.write("Informe o seu nome: ")
    process.stdin.on("data", data => {
        const nome = data.toString().replace("\n", "")

        process.stdout.write(`Eae ${nome}!!\n`)
        process.exit()
    })
}