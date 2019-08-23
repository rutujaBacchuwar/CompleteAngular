import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpserviceService } from './empservice.service';
import { HttpClientModule} from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    BindingComponent,
    DirectivesComponent,
    PipesComponent,
    EmpListComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
