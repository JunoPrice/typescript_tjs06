import readlinesync = require('readline-sync')

let numero1: number;
let numero2: number;
let opcao: number;

do {

console.log("***********************************************")
console.log("                  Calcularoda                  ")
console.log("***********************************************")
console.log("                  1 - Somar                    ")
console.log("                  2 - Subtrair                 ")
console.log("                  3 - Multiplicar              ")
console.log("                  4 - Dividir                  ")
console.log("                  0 - Sair                     ")
console.log("***********************************************")


numero1 = readlinesync.questionFloat('Digite o primeiro numero: ')

numero2 = readlinesync.questionFloat('Digite o primeiro numero: ')

}

console.log("A Soma dos 2 numeros é igual a: ", numero1 + numero2)
console.log("A  subtração dos 2 numeros é igual a: ", numero1 - numero2)
console.log("A Multiplicação dos 2 numeros é igual a: ", numero1 * numero2)
console.log("A Divisão dos 2 numeros é igual a: ", numero1 / numero2)
