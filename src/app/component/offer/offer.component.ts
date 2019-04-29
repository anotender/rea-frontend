import {Component, Input} from '@angular/core';
import {Offer} from "../../model/offer.model";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  @Input()
  public offer: Offer;

  isFloorVisible(): boolean {
    return this.offer.propertyType == 'FLAT' && !!this.offer.floor;
  }

  isYearOfConstructionVisible(): boolean {
    return !!this.offer.yearOfConstruction && this.offer.yearOfConstruction !== 0;
  }

}
