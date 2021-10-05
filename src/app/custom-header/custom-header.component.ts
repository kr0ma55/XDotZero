import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {

  linkList: String[];
  constructor(private router: Router) { }

  ngOnInit() {

    this.linkList = this.router.config.map(el => el.path).filter(el => el !== '');
    this.router.events.pipe(filter(ev => ev instanceof NavigationStart)).subscribe((val: NavigationStart) => {
      this.filterLinkListByActualRoute(val.url)
    });
  }
  goTo(route: string) {
   
    this.router.navigate([route]);
  }

  filterLinkListByActualRoute(actualRoute: string) {
    console.log("actualRoute", actualRoute)
    console.log("pre", this.linkList)
    this.linkList = this.router.config.map(el => el.path).filter(el => {
      if (el !== '')
        return el !== actualRoute.replace("/", '').trim()
    });
    console.log("post", this.linkList)
  }

}
