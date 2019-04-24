import {Component, Input} from '@angular/core';
import {CommonStatistics} from "../../model/statistics.model";

@Component({
  selector: 'app-common-statistics',
  templateUrl: './common-statistics.component.html',
  styleUrls: ['./common-statistics.component.css']
})
export class CommonStatisticsComponent {

  @Input()
  public commonStatistics: CommonStatistics;

  @Input()
  public historicalStatistics: Map<Date, CommonStatistics>;

  public historicalStatisticsData: any[] = [];

  showAverageHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.average, 'Average');
  }

  showMinHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.min, 'Average');
  }

  showMaxHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.max, 'Average');
  }

  showMedianHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.median, 'Average');
  }

  showStandardDeviationHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.standardDeviation, 'Average');
  }

  showVarianceHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.variance, 'Average');
  }

  private getHistoricalStatisticsData(property: (CommonStatistics) => number, propertyName: string): any[] {
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
