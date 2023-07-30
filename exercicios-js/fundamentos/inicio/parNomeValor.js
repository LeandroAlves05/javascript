// par nome/valor
const saudacao = 'Opa'; // Contexto léxico 1

function exec() {
    const saudacao = 'Fala meo'; //Contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Rua dos leroleros',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);