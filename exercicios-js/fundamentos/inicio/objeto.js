const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4999.90;
prod1['Desconto Top'] = 0.40; // Evitar atributos com espaço

console.log(prod1);

const prod2 = { // JSON não é a mesma coisa que OBJETOS
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod2);