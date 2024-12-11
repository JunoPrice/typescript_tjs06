import leia = require('readline-sync');
import { Stack } from "./Stack"; // Importando a classe Stack

const stack = new Stack<string>(); // Criando uma pilha de livros (usando string como tipo)

let opcao: number;

console.log("Bem-vindo ao sistema de organização de livros!");

do {
    // Menu
    console.log("\nOpções:");
    console.log("1 - Adicionar um novo livro na pilha");
    console.log("2 - Listar todos os livros da pilha");
    console.log("3 - Retirar um livro da pilha");
    console.log("0 - Sair");
    
    // Solicitar opção
    opcao = leia.questionInt("Escolha uma opção: ");

    switch (opcao) {
        case 1:
            const livro = leia.question("Digite o nome do livro: ");
            stack.push(livro);
            break;
        case 2:
            stack.printStack();
            break;
        case 3:
            stack.pop();
            break;
        case 0:
            console.log("Programa finalizado.");
            break;
        default:
            console.log("Opção inválida, tente novamente.");
    }

} while (opcao !== 0);