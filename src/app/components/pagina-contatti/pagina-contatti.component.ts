import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-contatti',
  templateUrl: './pagina-contatti.component.html',
  styleUrls: ['./pagina-contatti.component.scss']
})
export class PaginaContattiComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Nasco :' + PaginaContattiComponent.name );
  }
  ngOnDestroy(): void {
    console.log('Muoio :' + PaginaContattiComponent.name );
  }

}
