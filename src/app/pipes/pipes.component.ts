import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name ="Rutuja Bacchuwar"

  public person ={
    "name":"Rutu",
    "title":"Bacchuwar"
  }

  dateNow : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
