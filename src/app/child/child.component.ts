import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentCount:number;
  @Output() valueChange = new EventEmitter<number>();
  counter = 0;
  constructor() { }

  ngOnInit() {

  }

  valueChanged(){
    this.counter += 1;
    this.valueChange.emit(this.counter);
  }

}