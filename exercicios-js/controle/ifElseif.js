Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim;
}

const printResult = function(nota) {
    if (nota.entre(9, 10)){
        console.log("Quadro de honra")
    } else if(nota.entre(7, 8.99)){
        console.log("Aprovado!")
    } else if(nota.entre(4, 6.99)){
        console.log("Recuperação")
    } else if(nota.entre(0, 3.99)){
        console.log("Reprovado")
    } else {
        console.log("Nota inválida")
    }
} 

printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2.3);
printResult(-1);
printResult(11);