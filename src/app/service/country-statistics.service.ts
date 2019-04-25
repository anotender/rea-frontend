import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {RegionStatistics} from "../model/statistics.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CountryStatisticsService {

  constructor(private db: AngularFirestore) {
  }

  getCountryStatistics(): Observable<RegionStatistics[]> {
    return this.db
      .collection('countryStatistics', ref => ref.orderBy('calculationDate', 'desc'))
      .valueChanges()
      .pipe(map(response => response as RegionStatistics[]));
  }

}
