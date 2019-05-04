import {Injectable} from '@angular/core';
import {AngularFirestore, QueryFn} from "@angular/fire/firestore";
import {RegionStatistics} from "../model/statistics.model";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

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
    return this.getRegionStatistics('countryStatistics');
  }

  getCityStatistics(city: string): Observable<RegionStatistics[]> {
    return this.getRegionStatistics('cityStatistics', ref => ref.where('region', '==', city));
  }

  private getRegionStatistics(collection: string, query?: QueryFn): Observable<RegionStatistics[]> {
    return this.db
      .collection(collection, query)
      .valueChanges()
      .pipe(map(response => response as RegionStatistics[]))
      .pipe(tap(statistics => statistics.forEach(rs => rs.calculationDate = new Date(rs.calculationDate["year"], rs.calculationDate["monthValue"], rs.calculationDate["dayOfMonth"]))))
      .pipe(tap(statistics => statistics.sort((rs1, rs2) => rs2.calculationDate.getTime() - rs1.calculationDate.getTime())));
  }

}
