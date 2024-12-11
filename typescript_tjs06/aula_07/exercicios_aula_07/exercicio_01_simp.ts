import leia = require('readline-sync');
import { Queue } from "./Queue"; 

const fila = new Queue<string>(); 

let opcao: number;

console.log('\nBem-vindo(a) ao Banco de São Paulo\nAs opções disponíveis são: ');

do {
    // Menu que o atendente vê
    console.log("\nOpções:");
    console.log("1 - Adicionar um novo Cliente na fila");
    console.log("2 - Listar todos os Clientes na fila");
    console.log("3 - Retirar Cliente da fila");
    console.log("0 - Sair");
    
    // Solicitar opção a ser digitada
    opcao = leia.questionInt("Escolha uma opcao: ");

    switch (opcao) {
        case 1:
            const cliente = leia.question("Digite o nome do cliente: ");
            fila.enqueue(cliente);
            console.log(`${cliente} foi adicionado à fila.`);
            break;
        case 2:
            fila.printQueue();
            break;
        case 3:
            const clienteChamado = fila.dequeue();
            if (clienteChamado) {
                console.log(`O cliente ${clienteChamado} foi chamado.`);
            }
            break;
        case 0:
            console.log("Programa finalizado.");
            break;
        default:
            console.log("Opção inválida, tente novamente.");
    }

} while (opcao !== 0);
