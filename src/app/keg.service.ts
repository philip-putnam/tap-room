import { Injectable } from '@angular/core';
import { Keg } from './keg.model';
import { KEGS } from './mock-kegs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.kegs = angularFire.database.list('kegs');
  }

  getKegs() {
    // console.log(this.kegs);
    // console.log(this.kegs.subscribe(kegs => kegs));
    // var temp = this.kegs.subscribe(kegs => console.log(kegs));
    // this.kegs.subscribe(kegs => kegs.forEach(keg => {console.log('Keg:', keg)}));
    return this.kegs;
  }

  getKegByBeerName(beerName: string){
    for (var i = 0; i <= KEGS.length - 1; i++) {
      if (KEGS[i].name === beerName) {
        return KEGS[i];
      }
    }
  }

}
