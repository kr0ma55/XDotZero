import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Cane, CiaoMondo, Pianeta, Praticante, Tigre, Universo } from 'src/app/model/praticante.model';

@Component({
  selector: 'app-foto-eventi-card',
  templateUrl: './foto-eventi-card.component.html',
  styleUrls: ['./foto-eventi-card.component.scss']
})
export class FotoEventiCardComponent implements OnInit,OnDestroy {

  @Input() titolo;
  @Input() testo;
  @Output() mettiAnsiaAllUtente = new EventEmitter<string>();
  nuovoCiaMondo : CiaoMondo;
  nuovoUniverso : Universo;
  listaPianeti : Pianeta[];

  numeroComponente :number  =5678;
  constructor() { }
  
  ngOnDestroy(): void {
  

  }

  ngOnInit(): void {
    
    this.nuovoCiaMondo = new CiaoMondo();
    this.nuovoCiaMondo.saluta();
    const nuovoPianeta = new Pianeta('Plutone');
    const nuovoPianetaDue = new Pianeta('Mercurio');

    this.nuovoUniverso = new Universo(nuovoPianeta,nuovoPianetaDue);

    const nuovaTigre = new Tigre();
    const nuovoCane = new Cane();

  }


  comunicaAnsia(){
    this.mettiAnsiaAllUtente.emit('ANSIA da parte del figlio');
  }


  clickBottonListaPianeti(){

    this.listaPianeti = this.nuovoUniverso.ottieniPianeti();
    
  }

}
