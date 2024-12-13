export class Transporte{

    private _capacidade: number;


	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}
    
	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}
	
	public visualizar(){
		console.log("********************************************")
		console.log("          DADOS DO TRANSPORTE")
		console.log("********************************************")
		console.log(`Capacidade do Meio de Transporte: ${this._capacidade}`)
	}
}