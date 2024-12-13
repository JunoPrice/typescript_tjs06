import { Terrestre } from './Terrestre';
//Automovel vai herdar terrestres que herdou transporte, ou seja, herança da herança.


export class Automovel extends Terrestre{ //O typescript só permite 1 herança em cada classe, só herança simples, não multipla



    /*para selecionar varias linhas e escrever a mesma coisa, segura alt, 
    seleciona a linha inicial e vai clicando nas de baixo até onde você quer e escreve*/
    private _cor: string;
    private _numeroPortas: number;
    private _placa: string;
    private _marcha: number;


	constructor(capacidade: number, numeroRodas: number, velocidade: number, cor: string, numeroPortas: number, placa: string, marcha: number) {
        super(capacidade, numeroRodas, velocidade);
		this._cor = cor;
		this._numeroPortas = numeroPortas;
		this._placa = placa;
		this._marcha = marcha;
	}

	public get cor(): string {
		return this._cor;
	}

	public get numeroPortas(): number {
		return this._numeroPortas;
	}

	public get placa(): string {
		return this._placa;
	}

	public get marcha(): number {
		return this._marcha;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set numeroPortas(value: number) {
		this._numeroPortas = value;
	}

	public set placa(value: string) {
		this._placa = value;
	}

	public set marcha(value: number) {
		this._marcha = value;
	}
		public visualizar(){
			super.visualizar(); //to pegando tudo que esta no metodo visualizar da classe TERRESTRE
			//E trazendo para dentro do visualizar da classe AUTOMOVEL - ISSO É POLIMORFISMO
			console.log(`Cor: ${this._cor}`)
			console.log(`Numero de Portas: ${this._numeroPortas}`)
			console.log(`Placa: ${this._placa}`)
			console.log(`Número de Marchas: ${this._marcha}`)
		}
}