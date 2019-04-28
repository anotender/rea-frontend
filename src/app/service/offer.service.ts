import {Injectable} from '@angular/core';
import {Offer} from "../model/offer.model";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private db: AngularFirestore) {
  }

  getOffersByOfferType(offerType: string): Observable<Offer[]> {
    return this.db
      .collection<Offer>('offers', ref => ref.where('offerType', '==', offerType.toUpperCase()))
      .valueChanges()
  }

  getOfferTypes(): string[] {
    return ["RENT", "SELL"];
  }

  getPropertyTypes(): string[] {
    return ["HOUSE", "FLAT"];
  }

  getVendors(): string[] {
    return ['Morizon', 'OtoDom', 'Domiporta']
  }

}
