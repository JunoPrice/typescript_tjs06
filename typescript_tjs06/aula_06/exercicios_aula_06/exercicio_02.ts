import readlineSync = require('readline-sync')

const numeros: Set<number> = new Set<number>();

console.log('Digite 10 numeros inteiros não repetidos:');
while (numeros.size < 10) {
    const input = readlineSync.question("Digite um numero: ");
    
    const numero = parseInt(input, 10);

    if (Number.isInteger(numero) && input === numero.toString()) {
        if (numeros.has(numero)) {
            console.log('Esse numero já foi digitado, tente novamente!');
        } else {
            numeros.add(numero);
        }
    } else {
        console.log("Por favor, digite um numero inteiro valido (sem vírgula ou decimais).");
    }
}

const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);

console.log('\nElementos do Set (numeros unicos) em ordem crescente:');
numerosOrdenados.forEach(numero => {
    console.log(numero);
});
