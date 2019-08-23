import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments =[{
    "id":1,"name":"mnbvcxz",
  },
  {
    "id":2,"name":"zxcvbnm",
  },
  {
    "id":3,"name":"lkjhg",
  },
]
constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
  }
  onSelect(department) {
    //this.router.navigate(['/departments', department.id]);
     this.router.navigate([department.id], { relativeTo: this.route });
  }
}
