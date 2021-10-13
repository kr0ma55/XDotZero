import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../test-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,AfterViewInit {

  checkedFlag: boolean = false;
  
  @ViewChild('checkboxInput', { static: false }) ciao: ElementRef;
  constructor(private testService: TestService) { }
  ngAfterViewInit(): void {
    //console.log(this.ciao); 
  }

  ngOnInit() { //console.log(this.ciao); 
    this.testService.getChatMessage().subscribe(res => {console.log(res)});
  }

checkboxChange(){
this.ciao.nativeElement.ariaChecked = this.ciao.nativeElement.checked;
console.log(this.ciao.nativeElement.ariaChecked);
  /* console.log(this.ciao);  */
}
}
