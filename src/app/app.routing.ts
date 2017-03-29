import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main/main.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'beer/:name', component: BeerDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
