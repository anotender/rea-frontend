import {Pipe} from '@angular/core';
import {PropertyFilterPipe} from "./property-filter.pipe";

@Pipe({
  name: 'minAreaFilter'
})
export class MinAreaFilterPipe extends PropertyFilterPipe {

  protected filterCondition(num: number): (Offer) => boolean {
    return o => o.area >= num
  }

}
