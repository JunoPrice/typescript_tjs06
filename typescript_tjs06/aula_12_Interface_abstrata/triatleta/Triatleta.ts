import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

//classe abstrata você é obrigado a emplementar, como o caso da CLASSE "Pessoa"
//Interface, mesmo sendo uma classe abstrata pura, você só implementa se for usar, opcional.

export class Triatleta extends Pessoa implements Ciclista, Nadador, Corredor{

    constructor(nome: string){
        super(nome);

    }
    
    public pedalar(): void {
        console.log("Pedalando...");
    }
    public aquecer(): void {
        console.log("Aquecendo...");
    }
    public nadar(): void {
        console.log("Nadando...");
    }
    public correr(): void {
        console.log("Correndo...");
    }
    public cansou(): void {
        console.log("Cansou...");
    }

}