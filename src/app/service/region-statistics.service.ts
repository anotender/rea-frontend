import {Injectable} from '@angular/core';
import {AngularFirestore, QueryFn} from "@angular/fire/firestore";
import {RegionStatistics} from "../model/statistics.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegionStatisticsService {

  constructor(private db: AngularFirestore) {
  }

  getCountries(): string[] {
    return ['Poland'];
  }

  getCities(): string[] {
    return ['Warszawa', 'Gdansk', 'Gdynia', 'Krakow', 'Lodz', 'Poznan', 'Wroclaw', 'Bialystok', 'Bydgoszcz', 'Katowice', 'Kielce', 'Lublin', 'Olsztyn', 'Opole', 'Rzeszow', 'Szczecin', 'Zielona Gora'];
  }

  getCountryStatistics(): Observable<RegionStatistics[]> {
    return this.getRegionStatistics('countryStatistics', ref => ref.orderBy('calculationDate', 'desc'));
  }

  getCityStatistics(city: string): Observable<RegionStatistics[]> {
    return this.getRegionStatistics('cityStatistics', ref => ref.where('region', '==', city).orderBy('calculationDate', 'desc'));
  }

  private getRegionStatistics(collection: string, query: QueryFn): Observable<RegionStatistics[]> {
    return this.db
      .collection(collection, query)
      .valueChanges()
      .pipe(map(response => response as RegionStatistics[]));
  }

}
