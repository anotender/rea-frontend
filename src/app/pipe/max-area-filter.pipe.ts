import {Pipe} from '@angular/core';
import {PropertyFilterPipe} from "./property-filter.pipe";

@Pipe({
  name: 'maxAreaFilter'
})
export class MaxAreaFilterPipe extends PropertyFilterPipe {

  protected filterCondition(num: number): (Offer) => boolean {
    return o => o.area <= num;
  }

}
