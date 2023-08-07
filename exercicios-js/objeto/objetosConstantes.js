//Pessoa -> 123 -> {...}
const pessoa = { nome: "João" }
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome : 'Ana'} // erro

Object.freeze(pessoa) // Trava o objeto, tornando Imutável

pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: "João"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)
