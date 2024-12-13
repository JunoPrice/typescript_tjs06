import readlinesync = require("readline-sync");
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors} from '.src/util/Colors';
import { ContaController } from "./src/controller/ContaController";

export function main() {
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    const contas: ContaController = new ContaController()
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 10000.00, 10000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5699, 2, "Jean Lima", 15000, 15));

    while (true) {

        console.log("colors.bg.black, colors.fg.green,********************************************");
        console.log("                                            ");
        console.log("             BANCO DO ANDRADE               ");
        console.log("                                            ");
        console.log("********************************************");
        console.log("     1 - Criar Conta                        ");
        console.log("     2 - Listar todas as Contas             ");
        console.log("     3 - Buscar Conta por Numero            ");
        console.log("     4 - Atualizar Dados da Conta           ");
        console.log("     5 - Apagar Conta                       ");
        console.log("     6 - Sacar                              ");
        console.log("     7 - Depositar                          ");
        console.log("     8 - Transferir valores entre Contas    ");
        console.log("     9 - Sair                               ");
        console.log("********************************************", colors.reset);
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt(""):



    }
}