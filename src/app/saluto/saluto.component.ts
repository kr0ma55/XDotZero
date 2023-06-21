import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saluto',
  templateUrl: './saluto.component.html',
  styleUrls: ['./saluto.component.scss']
})
export class SalutoComponent implements OnInit{


  saluto : Object;

  listaVoti :Object[];
  dataPagellino : String;

  



  ngOnInit(): void {
  
    //FACCIAMO FINTA CHE L'OGGETO PROVENGA DA UN BE
    // E IL SUO VALORE CAMBI OGNI GIORNO
    this.saluto = {
      "documentStatus": "ROSSO",
      "campo2" :"verde"
    }
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
    
    
    
    ]
    this.dataPagellino = "Dal 01-10-2015";
  
  
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

}