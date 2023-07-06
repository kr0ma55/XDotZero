import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit,OnDestroy{

  constructor(private router: Router) {

  }
  ngOnDestroy(): void {
    console.log('Muoio :' + CustomHeaderComponent.name );
  }
  ngOnInit(): void {
    console.log('Nasco :' + CustomHeaderComponent.name );
  }
  

  navigateTo(stringa: string) {
    this.router.navigate(['/', stringa]);
    //this.router.navigate(['/'+stringa], { queryParams: { page: 1 } });
  }
}