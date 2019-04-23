import {Component, Input, OnInit} from '@angular/core';
import {StatisticsByOfferAndPropertyType} from "../../model/statistics.model";

@Component({
  selector: 'app-offer-and-property-statistics',
  templateUrl: './offer-and-property-type-statistics.component.html',
  styleUrls: ['./offer-and-property-type-statistics.component.css']
})
export class OfferAndPropertyTypeStatisticsComponent implements OnInit {

  @Input()
  public currentStatistics: StatisticsByOfferAndPropertyType;

  @Input()
  public historicalStatistics: Map<Date, StatisticsByOfferAndPropertyType>;

  public historicalStatisticsData: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  showNumberOfOffersHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.numberOfOffers, 'Number of offers')
  }

  showAveragePricePerSquareMeterHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.averagePricePerSquareMeter, 'Average price per square meter')
  }

  private getHistoricalStatisticsData(property: (StatisticsByOfferAndPropertyType) => number, propertyName: string): any[] {
    let historicalStatisticsSeries: any[] = [];

    this.historicalStatistics.forEach((s, d) => {
      historicalStatisticsSeries.push({
        name: this.formatDate(d),
        value: property(s)
      })
    });

    return [{
      name: propertyName,
      series: historicalStatisticsSeries
    }];
  }

  private formatDate(d: Date): string {
    return d["dayOfMonth"] + ' ' + d["month"] + ' ' + d["year"];
  }

}
