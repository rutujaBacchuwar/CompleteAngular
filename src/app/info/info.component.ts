import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  // @Input()
  // public parentData;

  @Input('parentData')
  public name;

  @Output()
  public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit("this is a child event");
  }

}
