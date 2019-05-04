import {Component, Input, OnInit} from '@angular/core';
import {CommonStatistics, StatisticsByOfferAndPropertyType} from "../../model/statistics.model";

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

  public areaHistoricalStatistics: Map<Date, CommonStatistics>;

  public priceHistoricalStatistics: Map<Date, CommonStatistics>;

  public numberOfRoomsHistoricalStatistics: Map<Date, CommonStatistics>;

  public yearOfConstructionHistoricalStatistics: Map<Date, CommonStatistics>;

  public historicalStatisticsData: any[] = [];

  ngOnInit() {
    this.areaHistoricalStatistics = this.getHistoricalCommonStatisticsFor(s => s.areaStatistics);
    this.priceHistoricalStatistics = this.getHistoricalCommonStatisticsFor(s => s.priceStatistics);
    this.numberOfRoomsHistoricalStatistics = this.getHistoricalCommonStatisticsFor(s => s.numberOfRoomsStatistics);
    this.yearOfConstructionHistoricalStatistics = this.getHistoricalCommonStatisticsFor(s => s.yearOfConstructionStatistics);
  }

  showNumberOfOffersHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsDataFor(s => s.numberOfOffers, 'Number of offers')
  }

  showAveragePricePerSquareMeterHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsDataFor(s => s.averagePricePerSquareMeter, 'Average price per square meter')
  }

  private getHistoricalCommonStatisticsFor(commonStatisticsProperty: (StatisticsByOfferAndPropertyType) => CommonStatistics): Map<Date, CommonStatistics> {
    let historicalCommonStatistics: Map<Date, CommonStatistics> = new Map<Date, CommonStatistics>();

    this.historicalStatistics.forEach((s, d) => {
      let cs = commonStatisticsProperty(s);
      if (cs) {
        historicalCommonStatistics.set(d, cs);
      }
    });

    return historicalCommonStatistics;
  }

  private getHistoricalStatisticsDataFor(property: (StatisticsByOfferAndPropertyType) => number, propertyName: string): any[] {
    let historicalStatisticsSeries: any[] = [];

    this.historicalStatistics.forEach((s, d) => {
      historicalStatisticsSeries.push({
        name: d,
        value: property(s)
      })
    });

    return [{
      name: propertyName,
      series: historicalStatisticsSeries
    }];
  }

}
