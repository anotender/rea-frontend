import {Pipe} from '@angular/core';
import {PropertyFilterPipe} from "./property-filter.pipe";

@Pipe({
  name: 'addressFilter'
})
export class AddressFilterPipe extends PropertyFilterPipe {

  protected filterCondition(address: string): (Offer) => boolean {
    return o => this.containsIgnoreCase(o.address, address)
  }

  private containsIgnoreCase(s1: string, s2: string): boolean {
    return s1.toLowerCase().includes(s2.toLowerCase());
  }

}
