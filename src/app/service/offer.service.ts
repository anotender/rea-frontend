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

  getOffers(): Observable<Offer[]> {
    return this.db
      .collection<Offer>('offers')
      .valueChanges()
  }

}
