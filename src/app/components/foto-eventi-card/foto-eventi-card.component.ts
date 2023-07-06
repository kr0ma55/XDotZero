import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-foto-eventi-card',
  templateUrl: './foto-eventi-card.component.html',
  styleUrls: ['./foto-eventi-card.component.scss']
})
export class FotoEventiCardComponent implements OnInit {

  @Input() titolo;
  @Input() testo;
  @Output() mettiAnsiaAllUtente = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  comunicaAnsia(){
    this.mettiAnsiaAllUtente.emit('ANSIA da parte del figlio');
  }

}
