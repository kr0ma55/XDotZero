export interface Praticante {
    id: number;
    nickName: string;
    colore: string;
}
export interface PraticanteResponse {
    lista: Praticante[];
}
export class CiaoMondo {
    private salutoPreImpostatoItaliano :string = 'Buongiorno';
    private salutoPreImpostatoFrancese :string = 'Bonojour';
    private salutoPreImpostatoInternazionale :string = 'GoodMorning';
    private lingua : string;
    constructor(lingua?: string){

        this.lingua = lingua;

     }

    saluta(){
        
            (this.lingua === 'ITALIANO') ? console.log(this.salutoPreImpostatoItaliano) : null ;
            (this.lingua !== 'ITALIANO' && this.lingua !== 'FRANCESE') ? console.log(this.salutoPreImpostatoInternazionale) : null ;

        
    }      
}

export class Universo {
        listaPianeti : Pianeta[];
        nomeUniverso :string;
        constructor (paramUno: Pianeta,paramDue: Pianeta,paramTre?: Pianeta){
            this.listaPianeti.push(paramUno,paramDue);
        }

        ottieniPianeti(): Pianeta[] {
            return this.listaPianeti;
        }

        fornisciNomeUniverso(nomeUniversoComeParametro : string){
            this.nomeUniverso = nomeUniversoComeParametro

        }


}

export class Pianeta {

    private nomePianeta: string ;
    private nomeGalassia: string ;

    constructor (nomePianetaParam: string,){
        this.nomePianeta = nomePianetaParam;
    }
}


export class Mammifero {

   consumaRapporto(){

   }
}
export class Tigre extends Mammifero {

    
    ruggisce(){

    }
 }

 export class Cane extends Mammifero {

    
    abbaia(){
        
    }
 }