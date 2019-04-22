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

  getTheLatestCountryStatistics(): Observable<CountryStatistics> {
    return this.db
      .collection('countryStatistics', ref => ref.orderBy('calculationDate', 'desc').limit(1))
      .valueChanges()
      .pipe(map(stats => stats[0] as CountryStatistics));
  }

}
