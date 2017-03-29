import { Injectable } from '@angular/core';
import { Keg } from './keg.model';
import { KEGS } from './mock-kegs';

@Injectable()
export class KegService {

  constructor() { }

  getKegs() {
    return KEGS;
  }

  getKegByBeerName(beerName: string){
    for (var i = 0; i <= KEGS.length - 1; i++) {
      if (KEGS[i].name === beerName) {
        return KEGS[i];
      }
    }
  }

}
