import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'employee', component: EmployeeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
