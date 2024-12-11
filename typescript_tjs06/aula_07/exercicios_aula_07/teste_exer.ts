import readlinesync = require('readline-sync');
import { Queue } from './Queue';
const leia = require('readline-sync')

let nome: string = leia.question('Recepcionista, digite seu nome: ')

console.log(nome,', Bem vindo(a) ao Banco de Sao Paulo \nAs opcoes disponiveis são: ')
console.log('1 - Adicionar Cliente na Fila')
console.log('2 - Listar todos os Clientes')
console.log('3 - Retirar Cliente da Fila')
console.log('0 - Sair')

let pedido = leia.questionInt('\nDigite o numero desejado: ')
let valor;
let valorMult
let opcao

switch(pedido){
    case 1:
        opcao = 'Adicionar Cliente na Fila'
        valor = 10.00;
        break;
    case 2:
    opcao = 'Listar todos os Clientes'    
    valor = 15.00;
        break;
    case 3:
    opcao = 'Retirar Cliente da Fila'    
    valor = 18.00;
        break;
    case 4:
    opcao = 'Sair'    
    valor = 12.00;
        break;
    default:
        console.log('Opcao invalida, tente novamente!')
        process.exit(0)
    
}
//ADICIONAR NA LISTA

//const fila = new Queue<string>();

//fila.enqueue(readlinesync.question("Digite o seu nome: "))

//fila.printQueue();