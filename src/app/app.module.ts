import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main/main.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MainComponent,
    BeerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
