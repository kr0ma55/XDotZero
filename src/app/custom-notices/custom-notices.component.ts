import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-notices',
  templateUrl: './custom-notices.component.html',
  styleUrls: ['./custom-notices.component.scss']
})
export class CustomNoticesComponent implements OnInit {
  cardList = [1,2,3,4,5,6,7]
  constructor() { }

  ngOnInit() {
  }

}
