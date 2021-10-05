import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('ciao', { static: false }) ciao: ElementRef;

  showDropDownFlag = false;
  timer = timer(5);
  interval = interval(20)
  $destroy;
  mouseout$;
  mouseover$;
  constructor() { }
  ngAfterViewChecked(): void {
    if (this.showDropDownFlag) {


      this.mouseover$ = fromEvent(this.ciao.nativeElement, 'mouseover');
      this.mouseout$ = fromEvent(this.ciao.nativeElement, 'mouseout');
      
      const tempo = this.mouseover$.pipe(take(1)).subscribe(arg => {
        
        tempo2.unsubscribe();
        console.log('SOPRA')
      });
      const tempo2 = this.mouseout$.pipe(take(1)).subscribe(arg => {

        console.log('NON SOPRA');
        tempo.unsubscribe();
      });
        
        
        
       
     /*  const subscribe = this.interval.subscribe(val => {
        this.ciao.nativeElement.style.transform = "rotate(" + val + "deg)"
  
      }); */
    }
  }


  ngOnInit() {
    /* console.log(this.ciao) */

  }
  ngAfterViewInit(): void {
    /*   this.mouseover$ = fromEvent( this.ciao.nativeElement, 'click');
      this.mouseover$
        .subscribe(arg => console.log(arg)); */
    /*  console.log(this.ciao) */
  }

  showDropDown() {
    this.showDropDownFlag = !this.showDropDownFlag;
  }
  bounce($event: ElementRef) {
    const subscribe = this.interval.subscribe(val => {
      this.ciao.nativeElement.style.transform = "rotate(" + val + "deg)"

    });
  }


}
