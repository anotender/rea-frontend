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
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.min, 'Min');
  }

  showMaxHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.max, 'Max');
  }

  showMedianHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.median, 'Median');
  }

  showStandardDeviationHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.standardDeviation, 'Standard deviation');
  }

  showVarianceHistoricalStatistics() {
    this.historicalStatisticsData = this.getHistoricalStatisticsData(s => s.variance, 'variance');
  }

  private getHistoricalStatisticsData(property: (CommonStatistics) => number, propertyName: string): any[] {
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
