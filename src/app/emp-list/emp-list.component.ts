import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public emps=[];
  public errorMsg;

  

  constructor(private empserviceService:EmpserviceService) { }

  ngOnInit() {
    // this.emps=this.empserviceService.getEmp();

    this.empserviceService.getEmps().subscribe(data => this.emps = data,
      error=> this.errorMsg =error);
  }

}
