import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saluto',
  templateUrl: './saluto.component.html',
  styleUrls: ['./saluto.component.scss']
})
export class SalutoComponent implements OnInit{


  saluto : Object;



  ngOnInit(): void {
  
    //FACCIAMO FINTA CHE L'OGGETO PROVENGA DA UN BE
    // E IL SUO VALORE CAMBI OGNI GIORNO
    this.saluto = {
      "documentStatus": "ROSSO",
      "campo2" :"verde"
    }
  
  
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
