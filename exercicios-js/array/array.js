console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo"
aprovados.push("Abia") // Adiciona um elemento ao fim do array
console.log(aprovados.length)

aprovados[9] = "Roderi"
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Altera o array deixando-o em ordem alfabética
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 1) // Complexo e bem interessante
console.log(aprovados)