import * as readlineSync from 'readline-sync'; 

// Definindo a constante `leia` para simplificar
const leia = readlineSync;

// Definição da classe Queue (Fila)
class Queue {
    private fila: string[] = []; // Armazena os nomes dos clientes na fila

    // Adicionar cliente à fila
    public adicionarCliente(nome: string): void {
        this.fila.push(nome);
        console.log(`${nome} foi adicionado à fila.`);
    }

    // Listar todos os clientes na fila
    public listarClientes(): void {
        if (this.fila.length === 0) {
            console.log("A fila está vazia.");
        } else {
            console.log("Clientes na fila:");
            this.fila.forEach((cliente, index) => {
                console.log(`${index + 1} - ${cliente}`);
            });
        }
    }

    // Retirar (chamar) o primeiro cliente da fila
    public retirarCliente(): void {
        if (this.fila.length === 0) {
            console.log("A fila está vazia, não há clientes para retirar.");
        } else {
            const cliente = this.fila.shift();
            console.log(`O cliente ${cliente} foi retirado da fila.`);
        }
    }
}

// Criação de uma instância da fila
const fila = new Queue();
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
            fila.adicionarCliente(clienteNome);
            break;
        case 2:
            fila.listarClientes();
            break;
        case 3:
            fila.retirarCliente();
            break;
        default:
            console.log('Opção invalida, tente novamente!');
            break;
    }

    // O menu será exibido novamente após cada ação, sem a necessidade de uma função principal
    pedido = leia.questionInt('\nDigite o numero desejado: ');
}

console.log('Programa finalizado.');
