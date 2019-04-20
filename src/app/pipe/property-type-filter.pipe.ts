import {Pipe} from '@angular/core';
import {PropertyFilterPipe} from "./property-filter.pipe";

@Pipe({
  name: 'propertyTypeFilter'
})
export class PropertyTypeFilterPipe extends PropertyFilterPipe {

  protected filterCondition(propertyType: string): (Offer) => boolean {
    return o => o.propertyType === propertyType.toUpperCase()
  }

}
