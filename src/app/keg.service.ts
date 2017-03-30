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
