import {PipeTransform} from "@angular/core";
import {Offer} from "../model/offer.model";

export abstract class PropertyFilterPipe implements PipeTransform {

  transform(offers: Offer[], value: any): Offer[] {
    if (!value || !offers || offers.length === 0) {
      return offers;
    }
    return offers.filter(this.filterCondition(value));
  }

  protected abstract filterCondition(value: any): (Offer) => boolean;

}
