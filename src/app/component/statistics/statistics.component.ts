import {Component, OnInit} from '@angular/core';
import {CountryStatisticsService} from "../../service/country-statistics.service";
import {RegionStatistics, StatisticsByOfferAndPropertyType} from "../../model/statistics.model";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  numberOfOffersByOfferType: any[] = [];
  numberOfOffersByPropertyType: any[] = [];
  currentCountryStatistics: RegionStatistics;
  countryStatistics: RegionStatistics[];

  constructor(private countryStatisticsService: CountryStatisticsService) {
  }

  ngOnInit() {
    this.countryStatisticsService
      .getCountryStatistics()
      .subscribe(countryStatistics => {
        this.countryStatistics = countryStatistics;
        this.currentCountryStatistics = this.countryStatistics[0];
        this.numberOfOffersByOfferType = this.groupAndCountOffersBy(cs => cs.offerType, this.currentCountryStatistics);
        this.numberOfOffersByPropertyType = this.groupAndCountOffersBy(cs => cs.propertyType, this.currentCountryStatistics);
      })
  }

  getHistoricalOfferAndPropertyTypeStatistics(offerType: string, propertyType: string): Map<Date, StatisticsByOfferAndPropertyType> {
    let historicalStatistics: Map<Date, StatisticsByOfferAndPropertyType> = new Map<Date, StatisticsByOfferAndPropertyType>();

    this.countryStatistics.forEach(cs => historicalStatistics.set(
      cs.calculationDate,
      cs.statisticsByOfferAndPropertyType.find(s => s.offerType === offerType && s.propertyType === propertyType)
    ));

    return historicalStatistics;
  }

  private groupAndCountOffersBy(property: (CountryStatistics) => string, cs: RegionStatistics): any[] {
    let groupedOffers: any[] = [];

    cs.statisticsByOfferAndPropertyType.forEach(s => {
      let groupedOffer = groupedOffers.find(go => go.name === property(s));
      if (groupedOffer) {
        groupedOffer.value += s.numberOfOffers;
      } else {
        groupedOffers.push({
          name: property(s),
          value: s.numberOfOffers
        });
      }
    });

    return groupedOffers;
  }

}
