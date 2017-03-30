import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'pintsLeftFilter',
  pure: false
})
export class PintsLeftFilterPipe implements PipeTransform {
  input: Keg[];

  transform(kegs: FirebaseListObservable<any[]>, filterType, reverse) {
    console.log(kegs);
    kegs.subscribe(dataLastEmittedFromObserver => {this.input = (dataLastEmittedFromObserver);});
    console.log(this.input);

    // if (filterType === 'brand' || filterType === 'name' || filterType === 'style') {
    //   if (!reverse) {
    //     return input.sort(function(a, b){
    //       if (a[filterType].toLowerCase() > b[filterType].toLowerCase()) {
    //         return 1;
    //       } else {
    //         return -1;
    //       }
    //     });
    //   } else {
    //     return input.sort(function(a, b){
    //       if (a[filterType].toLowerCase() > b[filterType].toLowerCase()) {
    //         return -1;
    //       } else {
    //         return 1;
    //       }
    //     });
    //   }
    // };
    //
    // if (filterType === 'pintsLeft' || filterType === 'price' || filterType === 'alcoholContent') {
    //   if (!reverse) {
    //     return input.sort(function(a, b){return a[filterType]-b[filterType]});
    //   } else {
    //     return input.sort(function(a, b){return b[filterType]-a[filterType]});
    //   }
    // };

    // if (filterType === 'brand') {
    //   if (!reverse) {
    //     return input.sort(function(a, b){
    //       if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
    //         return 1;
    //       } else {
    //         return -1;
    //       }
    //     });
    //   } else {
    //     return input.sort(function(a, b){
    //       if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
    //         return -1;
    //       } else {
    //         return 1;
    //       }
    //     });
    //   }
    // };
    //
    // if (filterType === 'name') {
    //   if (!reverse) {
    //     return input.sort(function(a, b){
    //       if (a.name.toLowerCase() > b.name.toLowerCase()) {
    //         return 1;
    //       } else {
    //         return -1;
    //       }
    //     });
    //   } else {
    //     return input.sort(function(a, b){
    //       if (a.name.toLowerCase() > b.name.toLowerCase()) {
    //         return -1;
    //       } else {
    //         return 1;
    //       }
    //     });
    //   }
    // };
    // if (filterType === 'style') {
    //   if (!reverse) {
    //     return input.sort(function(a, b){
    //       if (a.style.toLowerCase() > b.style.toLowerCase()) {
    //         return 1;
    //       } else {
    //         return -1;
    //       }
    //     });
    //   } else {
    //     return input.sort(function(a, b){
    //       if (a.style.toLowerCase() > b.style.toLowerCase()) {
    //         return -1;
    //       } else {
    //         return 1;
    //       }
    //     });
    //   }
    // };


    // if (filterType === 'pintsLeft') {
    //   if (!reverse) {
    //     return input.sort(function(a, b){return a.pintsLeft-b.pintsLeft});
    //   } else {
    //     return input.sort(function(a, b){return b.pintsLeft-a.pintsLeft});
    //   }
    // };
    //
    // if (filterType === 'alcoholContent') {
    //   if (!reverse) {
    //     return input.sort(function(a, b){return a.alcoholContent-b.alcoholContent});
    //   } else {
    //     return input.sort(function(a, b){return b.alcoholContent-a.alcoholContent});
    //   };
    // }
    //
    // if (filterType === 'price') {
    //   if (!reverse) {
    //     return input.sort(function(a, b){return a.price-b.price});
    //   } else {
    //     return input.sort(function(a, b){return b.price-a.price});
    //   }
    // };
  }
}
