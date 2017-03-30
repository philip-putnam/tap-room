import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main/main.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { PintsLeftFilterPipe } from './pints-left-filter.pipe';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MainComponent,
    BeerDetailComponent,
    PintsLeftFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
