import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.scss']
})
export class CustomFooterComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,) { }

  ngOnInit() {
    
  }
  // navigaVersoHome(){
  //   //this.router.navigate(['/home', { id: 77 }]);
  //   this.router.navigateByUrl('/home', { state: { hello: 'world' } })
  // }

  navigaVersoHome(){
this.router.navigate(['/home'], { queryParams: { serviceId: '55'} });
  }

}
