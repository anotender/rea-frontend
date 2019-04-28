import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Offer} from "../model/offer.model";
import {Observable} from "rxjs";
import {PricePredictionCoefficients} from "../model/prediction.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PricePredictionService {

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
    return this.db
      .collection('pricePredictionCoefficients', ref => ref.where('offerType', '==', offerType).where('propertyType', '==', propertyType))
      .valueChanges()
      .pipe(map(response => response as PricePredictionCoefficients[]))
      .pipe(map(coefficients => coefficients[0]));
  }

}
