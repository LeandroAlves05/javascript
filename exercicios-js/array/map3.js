Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borraca", "Preco": 3.45 }',
    '{ "nome": "Caderno", "Preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "Preco": 41.22 }',
    '{ "nome": "Caneta", "Preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map(paraObjeto).map2(apenasPreco)
console.log(resultado)