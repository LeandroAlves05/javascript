const moduloA = require('../../moduloa') // Não vai funcionar no linux (erro de sintaxe)
console.log(moduloA.ola)

const moduloB = require('../../moduloB') // Vai funcionar em geral
console.log(moduloB.bomDia)

const saudacao = require('saudacao') // Procura um arquivo index.js em node modules
console.log(saudacao.ola)

const c = require('./pastaC') // Procura o arquivo index dentro da pasta sozinho
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write("Bom dia!")
    res.end()
}).listen(8080)