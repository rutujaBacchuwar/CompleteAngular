import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmp } from './emp';
import { Observable } from 'rxjs';
import {catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw'

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  // What is service : A class with specific purpose
  // Why it's neede: Share data, implement application logic, external interaction


  // DI is a design/coding pattern in which class receives its dependencies from external sources rather than creating them itself

  // Observable : A sequence of items that arrive asynchronously over time 


  constructor(private http: HttpClient) { }

  private url: string = "/assets/data/emp.json";
  //   public getEmp(){
  //     return [
  //     {"name":"abc","age":12},
  //     {"name":"lmn","age":14},
  //     {"name":"xyz","age":16}

  //   ];
  // }

  getEmps():Observable<IEmp[]> {
    return this.http.get<IEmp[]>(this.url)
    .pipe(catchError((e) => this.errorHandler(e)))

  }

  errorHandler(error: HttpErrorResponse)
  {
    return Observable.throw(error.message || "server error");
  }



}
