import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Offer} from "../model/offer.model";
import {from, Observable} from "rxjs";
import {PricePredictionCoefficients} from "../model/prediction.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PricePredictionService {

  public pricePredictionCoefficients: PricePredictionCoefficients[] = [{
    propertyType: "FLAT",
    offerType: "SELL",
    area: 1,
    floor: 1,
    numberOfRooms: 1,
    yearOfConstruction: 1
  }, {
    propertyType: "FLAT",
    offerType: "RENT",
    area: 2,
    floor: 2,
    numberOfRooms: 2,
    yearOfConstruction: 2
  }, {
    propertyType: "HOUSE",
    offerType: "SELL",
    area: 3,
    floor: 3,
    numberOfRooms: 3,
    yearOfConstruction: 3
  }, {
    propertyType: "HOUSE",
    offerType: "RENT",
    area: 4,
    floor: 4,
    numberOfRooms: 4,
    yearOfConstruction: 4
  }];

  constructor(private db: AngularFirestore) {
  }

  calculatePriceForOffer(offer: Offer): Observable<number> {
    return this.getPricePredictionCoefficients(offer.offerType, offer.propertyType)
      .pipe(map(c => {
        return c.area * offer.area
          + c.numberOfRooms * offer.numberOfRooms
          + c.floor * offer.floor
          + c.yearOfConstruction * offer.yearOfConstruction;
      }))
  }

  private getPricePredictionCoefficients(offerType: string, propertyType: string): Observable<PricePredictionCoefficients> {
    return from([this.pricePredictionCoefficients
      .find(c => c.propertyType === propertyType && c.offerType === offerType)]);
  }

}
