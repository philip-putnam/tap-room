import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'pintsLeftFilter',
  pure: false
})
export class PintsLeftFilterPipe implements PipeTransform {

  transform(input: Keg[], filterType, reverse) {

    if (filterType === 'brand') {
      if (!reverse) {
        return input.sort(function(a, b){
          if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        return input.sort(function(a, b){
          if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
            return -1;
          } else {
            return 1;
          }
        });
      }
    };

    if (filterType === 'name') {
      if (!reverse) {
        return input.sort(function(a, b){
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        return input.sort(function(a, b){
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          } else {
            return 1;
          }
        });
      }
    };
    if (filterType === 'style') {
      if (!reverse) {
        return input.sort(function(a, b){
          if (a.style.toLowerCase() > b.style.toLowerCase()) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        return input.sort(function(a, b){
          if (a.style.toLowerCase() > b.style.toLowerCase()) {
            return -1;
          } else {
            return 1;
          }
        });
      }
    };

    if (filterType === 'pintsLeft') {
      if (!reverse) {
        return input.sort(function(a, b){return a.pintsLeft-b.pintsLeft});
      } else {
        return input.sort(function(a, b){return b.pintsLeft-a.pintsLeft});
      }
    };

    if (filterType === 'alcoholContent') {
      if (!reverse) {
        return input.sort(function(a, b){return a.alcoholContent-b.alcoholContent});
      } else {
        return input.sort(function(a, b){return b.alcoholContent-a.alcoholContent});
      };
    }

    if (filterType === 'price') {
      if (!reverse) {
        return input.sort(function(a, b){return a.price-b.price});
      } else {
        return input.sort(function(a, b){return b.price-a.price});
      }
    };
  }
}
