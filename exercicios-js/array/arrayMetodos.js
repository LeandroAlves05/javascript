const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push("Verstappen") // Adiciona um elemento ao fim do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift("Hamilton") // Adiciona um elemento no início do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // slice cria um novo array a partir de outro array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // índice 4 é ignorado
console.log(algunsPilotos2)