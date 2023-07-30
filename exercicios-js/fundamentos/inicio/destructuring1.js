// recurso de ES2015

const person = {
    name: 'Ana',
    age: 5,
    address: {
        location: 'Rua ABC',
        number: 1000
    }
}

const { name, age } = person;
console.log(name, age);

const { name: n, age: i } = person;
console.log(n, i);

const { lastName, funny = true } = person;
console.log(lastName, funny);

const { address: { location, number, cep } } = person;
console.log(location, number, cep);