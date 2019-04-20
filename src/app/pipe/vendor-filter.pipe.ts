import {Pipe} from '@angular/core';
import {PropertyFilterPipe} from "./property-filter.pipe";

@Pipe({
  name: 'vendorFilter'
})
export class VendorFilterPipe extends PropertyFilterPipe {

  protected filterCondition(vendors: string[]): (Offer) => boolean {
    return o => vendors.length === 0 || vendors.some(v => o.vendor === v.toUpperCase())
  }

}
