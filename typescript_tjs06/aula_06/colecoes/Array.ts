import readlinesync = require('readline-sync')

//Aqui nós criamos a coleção array vazia
const numeros: Array<number> = new Array <number>()

//Aqui nós colocamos valores a coleção - o push pode adicionar mais de um elemento, só que no final
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7);

//Aqui listamos os dados que foram adicionados
for(let numero of numeros) {
    console.log(numero);
}

//adiciona elementos a fila, mas neste caso você digita
numeros.push(readlinesync.questionFloat('Digite um numero: '))
//adiciona um ou mais elementos ao inicio do array, vai lá pro começo, fura fila
numeros.unshift(2, 4.5, 8, 9)

console.table(numeros)