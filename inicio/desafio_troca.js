let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp; 

[a, b] = [b, a]

// depois da troca... a = 94 e b = 7
console.log ("Agora o valor de a é: " + a);
console.log ("E o valor de b é: " + b);
