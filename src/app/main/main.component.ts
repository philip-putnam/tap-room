import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg.model';
import { Router } from '@angular/router';
import { KegService } from '../keg.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [KegService]
})
export class MainComponent implements OnInit {
  kegs: Keg[];
  keg: Keg;
  temp;
  filterType: string = 'brand';
  reverse: boolean = false;

  constructor(private router: Router, private kegService: KegService){}

  ngOnInit(){
    this.kegService.getKegs().subscribe(dataLastEmittedFromObserver => {
      this.temp = dataLastEmittedFromObserver;
      console.log(this.temp);
    });

  }

  goToBeerDetailPage(clickedKeg: Keg) {
    this.router.navigate(['beer', clickedKeg.name]);
  };

  setFilter(filterType, reverse) {
    this.filterType = filterType;
    this.reverse = reverse;
  }
}
