import leia = require('readline-sync');

class Stack {
    private stack: string[] = []; 

    public push(book: string): void {
        this.stack.push(book);
        console.log(`O livro "${book}" foi adicionado à pilha.`);
    }
    public listBooks(): void {
        if (this.stack.length === 0) {
            console.log("A pilha está vazia.");
        } else {
            console.log("Livros na pilha:");
            this.stack.forEach((book, index) => {
                console.log(`${index + 1} - ${book}`);
            });
        }
    }

    public pop(): void {
        if (this.stack.length === 0) {
            console.log("A pilha está vazia, não há livros para retirar.");
        } else {
            const book = this.stack.pop();
            console.log(`O livro "${book}" foi retirado da pilha.`);
        }
    }

    public isEmpty(): boolean {
        return this.stack.length === 0;
    }
}

const stack = new Stack(); 
let opcao: number;

console.log("Bem-vindo ao sistema de organização de livros!");

do {
    // Menu
    console.log("\nOpções:");
    console.log("1 - Adicionar um novo livro na pilha");
    console.log("2 - Listar todos os livros da pilha");
    console.log("3 - Retirar um livro da pilha");
    console.log("0 - Sair");
    
    opcao = leia.questionInt("Escolha uma opcao: ");

    switch (opcao) {
        case 1:
            const livro = leia.question("Digite o nome do livro: ");
            stack.push(livro);
            break;
        case 2:
            stack.listBooks();
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
