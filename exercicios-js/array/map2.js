const carrinho = [
    '{ "nome": "Borraca", "Preco": 3.45 }',
    '{ "nome": "Caderno", "Preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "Preco": 41.22 }',
    '{ "nome": "Caneta", "Preco": 7.50 }',
]

// Retornar array com apenas os precos
const valores = []

for (item of carrinho){
    const itemParsed = JSON.parse(item)
    valores.push(itemParsed.Preco)
}
console.log(valores)

const valores2 = carrinho.map((record) => JSON.parse(record).Preco)

console.log(valores2)

// Método da aula

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)