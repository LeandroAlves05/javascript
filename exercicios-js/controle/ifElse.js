const printResult = function (nota) {
    if (nota >= 7) {
        console.log("Aprovado!")
    } else {
        console.log("Reprovado.")
    }
}

printResult(10);
printResult(4);
printResult('Epa!'); // Cuidado, por isso é necessário TypeScript