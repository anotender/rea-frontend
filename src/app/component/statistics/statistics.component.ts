import {Component, OnInit} from '@angular/core';
import {CountryStatisticsService} from "../../service/country-statistics.service";
import {CountryStatistics} from "../../model/statistics.model";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  numberOfOffersByOfferType: any[] = [];
  numberOfOffersByPropertyType: any[] = [];
  countryStatistics: CountryStatistics;

  constructor(private countryStatisticsService: CountryStatisticsService) {
  }

  ngOnInit() {
    this.countryStatisticsService
      .getTheLatestCountryStatistics()
      .subscribe(countryStatistics => {
        this.numberOfOffersByOfferType = this.groupAndCountOffersBy(cs => cs.offerType, countryStatistics);
        this.numberOfOffersByPropertyType = this.groupAndCountOffersBy(cs => cs.propertyType, countryStatistics);
        this.countryStatistics = countryStatistics;
      })
  }

  private groupAndCountOffersBy(property: (CountryStatistics) => string, cs: CountryStatistics): any[] {
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
