/**A classe terrestre vai ser criada como herança da classe Transporte,
ela vai herdar todos os metodos e atributos da classe Transporte.*/

import { Transporte } from "./Transporte";
//Crie uma classe Terrestre com todos os atributos da transporte, é isso que esta escrito abaixo:
export class Terrestre extends Transporte{ 

    private _numeroRodas: number;
    private _velocidade: number;

//Metodo construtor CTRL SHIFT P - Constructor
//Nesse caso vai ter que colocar super pois ele esta herdando classes de outra classe, a super classe

	constructor(capacidade: number, numeroRodas: number, velocidade: number) {//adione o atributo herdado aqui

        super(capacidade) //capacidade é o parametro lá do arquivo Transporte, que esse aqui esta herdando.
		this._numeroRodas = numeroRodas;
		this._velocidade = velocidade;
	}

	public get numeroRodas(): number {
		return this._numeroRodas;
	}

	public get velocidade(): number {
		return this._velocidade;
	}


	public set numeroRodas(value: number) {
		this._numeroRodas = value;
	}


	public set velocidade(value: number) {
		this._velocidade = value;
	}
	public visualizar(){
		super.visualizar(); //to pegando tudo que esta no metodo visualizar da classe transporte
		//E trazendo para dentro do visualizar da classe terrestre
		console.log(`Numero de Rodas: ${this._numeroRodas}`)
		console.log(`Velocidade: ${this._velocidade}`)
	}
}