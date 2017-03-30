import { Injectable } from '@angular/core';
import { Keg } from './keg.model';
import { KEGS } from './mock-kegs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<any[]>;
  keg: Keg;
  subscription;

  constructor(private angularFire: AngularFire) {
    this.kegs = angularFire.database.list('kegs');
  }

  getKegs() {
    return this.kegs;
  }

  getKegById(kegId: string){
    return this.angularFire.database.object('/kegs/' + kegId);
  }

}
