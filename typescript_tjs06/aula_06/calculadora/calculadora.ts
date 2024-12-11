import readlinesync = require('readline-sync')

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat('Digite o primeiro numero: ')

numero2 = readlinesync.questionFloat('Digite o primeiro numero: ')

console.log("A Soma dos 2 numeros é igual a: ", numero1 + numero2)
console.log("A  subtração dos 2 numeros é igual a: ", numero1 - numero2)
console.log("A Multiplicação dos 2 numeros é igual a: ", numero1 * numero2)
console.log("A Divisão dos 2 numeros é igual a: ", numero1 / numero2)