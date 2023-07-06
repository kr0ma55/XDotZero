import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'XDotZero';
  cardList = [1,2,3,4,5,6,7]
  sub:Subscription
  
   constructor( private activatedRoute: ActivatedRoute){

  }
//   ngOnInit() {
//     this.sub = this.activatedRoute.paramMap
//     .pipe(map(() => window.history.state)).subscribe(el => console.log(el))
// }
ngOnInit() {
  this.sub = this.activatedRoute
  .queryParams
  .subscribe(params => {
    // Defaults to 0 if no query param provided.
    console.log(params)
  });
  this.sub.unsubscribe();
}
      
    }
    
  


