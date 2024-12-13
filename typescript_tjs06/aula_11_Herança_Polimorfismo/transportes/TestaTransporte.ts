import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";


function main(){ //crie a function

    const t1 = new Transporte(5);
    t1.visualizar();

    const tr1 = new Terrestre(5, 4, 100);
    tr1.visualizar()

    const a1 = new Automovel(5, 4, 250, "Verde", 5, "FLV-4566", 5);
    a1.visualizar();
    
    //a1.cor = "Laranja";
    //console.log(a1.cor); // Não esqueça de adicionar um metodo para visualização
}

main(); //assim que abrir a function já chame ela, para ela abrir automaticamente