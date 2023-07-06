import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.scss']
})
export class PaginaHomeComponent implements OnInit,OnDestroy {

  constructor() { }

  
  ngOnInit() {
    console.log('Nasco :' + PaginaHomeComponent.name );
  }
  ngOnDestroy(): void {
    console.log('Muoio :' + PaginaHomeComponent.name );
  }

  

}
