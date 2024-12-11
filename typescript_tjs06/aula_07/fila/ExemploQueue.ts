import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();

fila.enqueue("Beatriz");
fila.enqueue("Gustavo");
fila.enqueue("Alana");

//fila.enqueue(readlinesync.question("Digite o seu nome: "))

fila.printQueue();

console.log(fila.contains("Alana"))

console.log(fila.count())

console.log("\nChamar: ", fila.dequeue())

fila.dequeue()

fila.printQueue()

console.log("\nO próximo a ser chamado: ", fila.peek())