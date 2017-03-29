import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg.model';
import { Router } from '@angular/router';
import { KegService } from '../keg.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [KegService]
})
export class MainComponent implements OnInit {
  kegs: Keg[];

  constructor(private router: Router, private kegService: KegService){}

  ngOnInit(){
    this.kegs = this.kegService.getKegs();
  }

  goToBeerDetailPage(clickedKeg: Keg) {
    this.router.navigate(['beer', clickedKeg.name]);
  };
}
