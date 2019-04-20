import {Pipe} from '@angular/core';
import {PropertyFilterPipe} from "./property-filter.pipe";

@Pipe({
  name: 'minPriceFilter'
})
export class MinPriceFilterPipe extends PropertyFilterPipe {

  protected filterCondition(num: number): (Offer) => boolean {
    return o => o.price >= num
  }

}
