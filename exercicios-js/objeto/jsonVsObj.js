const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // ignora function

// console.log(JSON.parse("{ a:1, b:2, c:3 }"))    <- erro
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))  <- erro 2

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "String", "c": true, "d": {}, "e":[]}'))
