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
      .pipe(map(c => this.countOfferPrice(c, offer)));
  }

  private getPricePredictionCoefficients(offerType: string, propertyType: string): Observable<PricePredictionCoefficients> {
    return this.db
      .collection('pricePredictionCoefficients', ref => ref.where('offerType', '==', offerType).where('propertyType', '==', propertyType))
      .valueChanges()
      .pipe(map(response => response as PricePredictionCoefficients[]))
      .pipe(map(coefficients => coefficients[0]));
  }

  private countOfferPrice(c: PricePredictionCoefficients, o: Offer): number {
    return c.area * o.area
      + c.numberOfRooms * o.numberOfRooms
      + c.floor * o.floor
      + c.yearOfConstruction * o.yearOfConstruction;
  }

}
