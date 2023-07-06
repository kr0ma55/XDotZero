import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecuperoInfoService } from 'src/app/services/recupero-info.service';

@Component({
  selector: 'app-pagina-foto-eventi',
  templateUrl: './pagina-foto-eventi.component.html',
  styleUrls: ['./pagina-foto-eventi.component.scss']
})
export class PaginaFotoEventiComponent implements OnInit,OnDestroy{

  constructor(private istanzaServizioFotoEventi: RecuperoInfoService) { }
  listaCardRetrievedFromServer = [];
  titoloMio ='TITOLO___MIO_CON_INTERPOL';
  testoMio ='TESTO___MIO'
  ngOnInit() {
    //console.log('Nasco :' + PaginaFotoEventiComponent.name );
    this.istanzaServizioFotoEventi.recuperaCardFotoEventi().subscribe((res)=>{
      this.listaCardRetrievedFromServer = res.default.cardFotoEventiList;
      
      });
    
  }

  scatenaAnsia(eventoParametro){
    
    alert(eventoParametro);
  }
 
  ngOnDestroy(): void {
    //console.log('Muoio :' + PaginaFotoEventiComponent.name );
  }

}
