import leia = require('readline-sync');

interface queueInterface<Type> {
    enqueue(dataItem: Type): void;
    dequeue(): Type | undefined;
    isEmpty(): boolean;
    count(): number;
    printQueue(): void;
    peek(): Type | undefined;
    contains(dataItem: Type): boolean;
    clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {
    private QueueData: Array<Type> = [];

    isEmpty(): boolean {
        return this.QueueData.length <= 0;
    }

    enqueue(dataItem: Type): void {
        this.QueueData.push(dataItem);
    }

    dequeue(): Type | undefined {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return undefined;
        } else {
            const element = this.QueueData.shift();
            return element;
        }
    }

    count(): number {
        return this.QueueData.length;
    }

    printQueue(): void {
        if (this.isEmpty()) {
            console.log("A fila está vazia.");
        } else {
            console.log("Clientes na fila:");
            for (let i = 0; i < this.QueueData.length; i++) {
                console.log(`${i + 1} - ${this.QueueData[i]}`);
            }
        }
    }

    peek(): Type | undefined {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return undefined;
        } else {
            return this.QueueData[0];
        }
    }

    contains(dataItem: Type): boolean {
        return this.QueueData.includes(dataItem);
    }

    clear(): void {
        this.QueueData.length = 0;
    }
}

const fila = new Queue<string>();
const nome = leia.question('Recepcionista, digite seu nome: ');

console.log(`\n${nome}, Bem-vindo(a) ao Banco de São Paulo\nAs opções disponíveis são:`);
console.log('1 - Adicionar Cliente na Fila');
console.log('2 - Listar todos os Clientes');
console.log('3 - Retirar Cliente da Fila');
console.log('0 - Sair');

let pedido: number = leia.questionInt('\nDigite o numero desejado: ');

while (pedido !== 0) {
    switch (pedido) {
        case 1:
            const clienteNome = leia.question('\nDigite o nome do cliente: ');
            fila.enqueue(clienteNome);
            console.log(`${clienteNome} foi adicionado à fila.`);
            break;
        case 2:
            fila.printQueue();
            break;
        case 3:
            const clienteRetirado = fila.dequeue();
            if (clienteRetirado) {
                console.log(`O cliente ${clienteRetirado} foi retirado da fila.`);
            } else {
                console.log("A fila está vazia, não há clientes para retirar.");
            }
            break;
        default:
            console.log('Opção invalida, tente novamente!');
            break;
    }

    pedido = leia.questionInt('\nDigite o numero desejado: ');
}

console.log('Programa finalizado.');
