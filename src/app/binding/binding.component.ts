import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public name = "Rutu";
  public siteURL = window.location.href;
  public What = "";
  public Why = ""
  public name1;

  constructor() { }

  ngOnInit() {
  }

  onClick1() {
    this.What = "Framework to build client side application";
  }

  onClick2() {
    this.Why = "1.  Great for SPAs 2.  Modular approach 3.  Re-usable Code 4. Development quicker and easier 5.  Unit testable";
  }

}
