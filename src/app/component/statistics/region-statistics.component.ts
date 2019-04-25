import {Component, OnInit} from '@angular/core';
import {RegionStatisticsService} from "../../service/region-statistics.service";
import {RegionStatistics, StatisticsByOfferAndPropertyType} from "../../model/statistics.model";

@Component({
  selector: 'app-region-statistics',
  templateUrl: './region-statistics.component.html',
  styleUrls: ['./region-statistics.component.css']
})
export class RegionStatisticsComponent implements OnInit {

  cities: string[] = [];
  countries: string[] = [];
  selectedRegion: string;
  numberOfOffersByOfferType: any[] = [];
  numberOfOffersByPropertyType: any[] = [];
  currentRegionStatistics: RegionStatistics;
  regionStatistics: RegionStatistics[];

  constructor(private regionStatisticsService: RegionStatisticsService) {
  }

  ngOnInit() {
    this.cities = this.regionStatisticsService.getCities();
    this.countries = this.regionStatisticsService.getCountries();
  }

  selectCountry(country: string) {
    this.regionStatisticsService
      .getCountryStatistics()
      .subscribe(countryStatistics => {
        this.selectedRegion = country;
        this.regionStatistics = countryStatistics;
        this.currentRegionStatistics = this.regionStatistics[0];
        this.numberOfOffersByOfferType = this.groupAndCountOffersBy(cs => cs.offerType, this.currentRegionStatistics);
        this.numberOfOffersByPropertyType = this.groupAndCountOffersBy(cs => cs.propertyType, this.currentRegionStatistics);
      });
  }

  selectCity(city: string) {
    this.regionStatisticsService
      .getCityStatistics(city)
      .subscribe(cityStatistics => {
        this.selectedRegion = city;
        this.regionStatistics = cityStatistics;
        this.currentRegionStatistics = this.regionStatistics[0];
        this.numberOfOffersByOfferType = this.groupAndCountOffersBy(cs => cs.offerType, this.currentRegionStatistics);
        this.numberOfOffersByPropertyType = this.groupAndCountOffersBy(cs => cs.propertyType, this.currentRegionStatistics);
      });
  }

  isRegionSelected(): boolean {
    return !!this.selectedRegion;
  }

  getHistoricalOfferAndPropertyTypeStatistics(offerType: string, propertyType: string): Map<Date, StatisticsByOfferAndPropertyType> {
    let historicalStatistics: Map<Date, StatisticsByOfferAndPropertyType> = new Map<Date, StatisticsByOfferAndPropertyType>();

    this.regionStatistics.forEach(cs => historicalStatistics.set(
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
