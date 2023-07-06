import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Praticante } from '../model/praticante.model';
import * as mock from '../../assets/mock.json'

@Injectable({
  providedIn: 'root'
})
export class RecuperoInfoService {
  
  listaCardFotoEventi = mock;
  ADRESS = "htttp.....";
  constructor(private httpClient:HttpClient) { }


  // recuperListaStudenti() : Observable<Praticante[]>{

  //   return this.httpClient.get<Praticante[]>('http://localhost:8080/getallpraticanti').pipe(
  //     map((praticante: Praticante[]) =>   { return praticante
  //     }));
  // }

  recuperaCardFotoEventi():Observable<any>{
    
    return of(this.listaCardFotoEventi)
  }
  


}
