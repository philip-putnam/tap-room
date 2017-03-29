import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'pintsLeftFilter',
  pure: false
})
export class PintsLeftFilterPipe implements PipeTransform {

  transform(input: Keg[]) {
    return input.sort(function(a, b){return a.pintsLeft-b.pintsLeft});
  }
}
