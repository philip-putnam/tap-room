import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Keg } from '../keg.model';
import { KegService } from '../keg.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
  providers: [KegService]
})
export class BeerDetailComponent implements OnInit {
  kegId: string;
  kegToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private kegService: KegService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.kegId = urlParameters['id'];
    });
    this.kegToDisplay = this.kegService.getKegById(this.kegId);
  }

}
