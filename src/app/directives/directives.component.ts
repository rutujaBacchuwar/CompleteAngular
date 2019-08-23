import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public displayName = true;

  public color = "blue";

  public colors =["red","blue","black","white"];
  constructor() { }

  ngOnInit() {
  }

}
