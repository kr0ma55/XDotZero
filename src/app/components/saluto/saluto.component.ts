import { Component, OnInit } from '@angular/core';

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Praticante } from 'src/app/model/praticante.model';



@Component({
  selector: 'app-saluto',
  templateUrl: './saluto.component.html',
  styleUrls: ['./saluto.component.scss']
})
export class SalutoComponent implements OnInit{

  

  saluto : Object;
  contatore = 0;
  listaVoti :Object[];
  listaPraticanti :Praticante[];
  dataPagellino : String;

  constructor( ){
    
  }



  ngOnInit(): void {
    this.valorizzaListaVoti();

    this.getAllPraticanti();
    this.esempio();

  }

  private cambiaValoreInPagina(): void {
    if(this.saluto["documentStatus"] === "VERDE"){
      this.saluto["documentStatus"] = "ROSSO"; 
      return;
    }
    if(this.saluto["documentStatus"] === "ROSSO"){
      this.saluto["documentStatus"] = "VERDE"; 
      return;
    }
    

  }
  getAllPraticanti(){
//   this.servizioReale.recuperListaStudenti().subscribe((res :Praticante[]) => {
//   console.log(res);
//   for(let el of res){
   
//     console.log(el);
//   }
  
// });

  }
  valorizzaListaVoti(){
    this.listaVoti = [
      {
        "materia" : "Italiano",
        "voto" : 5,
        "media" : 5.5
      },
      {
        "materia" : "Matematica",
        "voto" : 6,
        "media" : 5.5
      },
      {
        "materia" : "Scienze",
        "voto" : 7,
        "media" : 5.5

      },
      {
        "materia" : "Storia",
        "voto" : 7,
        "media" : 4.5

      },
      {
        "materia" : "Geografia",
        "voto" : 7,
        "media" : 6.5

      },
      {
        "materia" : "Francese",
        "voto" : 7,
        "media" : 6.5

      },
      {
        "materia" : "Inglese",
        "voto" : 7,
        "media" : 5.5

      },
      {
        "materia" : "Musica",
        "voto" : 7,
        "media" : 5.5

      },
      {
        "materia" : "Educazione Fisica",
        "voto" : 7,
        "media" : 6.5

      },
      {
        "materia" : "Tecnica",
        "voto" : 7,
        "media" : 5.5

      },
      {
        "materia" : "Religione",
        "voto" : 7,
        "media" : 5.5

      }
    
    
    
    ];
    //FACCIAMO FINTA CHE L'OGGETO PROVENGA DA UN BE
    // E IL SUO VALORE CAMBI OGNI GIORNO
    this.saluto = {
      "documentStatus": "ROSSO",
      "campo2" :"verde"
    }
    
    this.dataPagellino = "Dal 01-10-2015";
  }

  esempio(){
    const source = fromEvent(document, 'click');
  
//map to string with given event timestamp
    // const example = source.pipe(map(event => {`Event time: ${event.timeStamp}`; this.contatore++;}));
//output (example): 'Event time: 7276.390000000001'
  const valRet = source.subscribe(val => {
  if(this.contatore ==4){
    valRet.unsubscribe();
  }
  console.log("Ho intercettato un : " + val)});
  }

}