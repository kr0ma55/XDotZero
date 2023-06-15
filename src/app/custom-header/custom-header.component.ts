import { Component } from '@angular/core';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent {
  title = 'XDotZero';
  cardList = [1,2,3,4,5,6,7]
}