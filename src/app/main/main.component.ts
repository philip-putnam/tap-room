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
  kegs: Keg[] = [];
  keg: Keg;
  subscription;
  filterType: string = 'brand';
  reverse: boolean = false;

  constructor(private router: Router, private kegService: KegService){}

  ngOnInit(){
    this.kegService.getKegs().subscribe(result => {
      this.subscription = result;
      this.subscription.forEach(keg => {
        this.keg = new Keg(keg['name'], keg['brand'], keg['price'], keg['alcoholContent'], keg['style'], keg['pintsLeft']);
        this.kegs.push(this.keg);
      });
    });
  }

  goToBeerDetailPage(clickedKeg) {
    this.router.navigate(['beer', clickedKeg.$key]);
  };

  setFilter(filterType, reverse) {
    this.filterType = filterType;
    this.reverse = reverse;
  }
}
