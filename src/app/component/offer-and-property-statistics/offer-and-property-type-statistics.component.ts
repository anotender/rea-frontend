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

  constructor() {
  }

  ngOnInit() {
  }

}
