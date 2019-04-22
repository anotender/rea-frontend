import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {CountryStatistics} from "../model/statistics.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CountryStatisticsService {

  constructor(private db: AngularFirestore) {
  }

  getCountryStatistics(): Observable<CountryStatistics[]> {
    return this.db
      .collection('countryStatistics', ref => ref.orderBy('calculationDate', 'desc'))
      .valueChanges()
      .pipe(map(response => response as CountryStatistics[]));
  }

}
