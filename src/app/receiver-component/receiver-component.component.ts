import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Stat } from 'src/shared/stat.model';
import { TestService } from '../test-service.service';
import { plainToClass, classToPlain } from "class-transformer";
import { map } from 'rxjs/internal/operators/map';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-receiver-component',
  templateUrl: './receiver-component.component.html',
  styleUrls: ['./receiver-component.component.scss']
})
export class ReceiverComponentComponent implements OnInit {

  constructor(private testService: TestService) { }

  projStat: Observable<Stat>[];
  form: FormGroup;
  listaOrigin = ["mela", "pera", "banana", "caffè", "perverso", "pervertito"];
  listaCommutabile = ["mela", "pera", "banana", "caffè", "perverso", "pervertito"];
  lista = [];
  selected = [];
  currentSelected = '';
  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl()
    })

    this.form.get('search').valueChanges
      .subscribe((val: any) => {

        const search = val.trim();
        if (search.length == 0) {
          this.lista = []
        }
        if (search.length > 2) {
          console.log('Search Term => ', search);
          this.lista = [...this.listaOrigin];
          if(this.selected.length > 0){
            for(let el of this.selected){
              let index2 = this.lista.indexOf(el);
              this.lista.splice(index2, 1);
            }
          
          }
          this.lista = this.lista.filter(el => { return el.indexOf(search) > -1 });
          
          console.log('Search lista => ', this.lista);
          console.log('Search listaOrigin => ', this.lista);
        }
      });
  }


  /* showConfig() {
    this.testService.getInfoProjectStats().pipe(

      filter(value => value.BimProjectCount > 5),
      tap(el => console.log("PRE TAPPED EL :", el)),
      map(el => {
        return {
          BimProjectCount: el.BimProjectCount * 2,
          NoBimProjectCount: el.NoBimProjectCount * 2
        }
      }),
      tap(el => console.log(" POST TAPPED EL :", el))


    ).subscribe(result => { console.log("RESULT:", result) })

  } */

  selectItem($event) {
    this.selected.push($event);
    this.selected = [...this.selected];
    this.form.controls["search"].reset('');
    
      this.lista = []
  }
  removeSelectedCard(search_term) {
    var index = this.selected.indexOf(search_term);    // <-- Not supported in <IE9
    
    if (index !== -1) {
      this.selected.splice(index, 1);
      this.form.controls["search"].reset('');
      
    }

    console.log(this.selected);
  }


}
