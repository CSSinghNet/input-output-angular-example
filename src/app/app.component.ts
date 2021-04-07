import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  parent = 10;
  parentCount = 0;
  ngOnInit(){

  }

  displayCounter(count){
    this.parentCount = count;
  }
}