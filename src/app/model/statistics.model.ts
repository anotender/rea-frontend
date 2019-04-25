export class CommonStatistics {
  average: number;
  median: number;
  variance: number;
  min: number;
  max: number;
  standardDeviation: number;
}

export class StatisticsByOfferAndPropertyType {
  offerType: string;
  propertyType: string;
  numberOfOffers: number;
  areaStatistics: CommonStatistics;
  priceStatistics: CommonStatistics;
  numberOfRoomsStatistics: CommonStatistics;
  averagePricePerSquareMeter: number;
}

export class RegionStatistics {
  region: string;
  totalNumberOfOffers: number;
  statisticsByOfferAndPropertyType: StatisticsByOfferAndPropertyType[];
  calculationDate: Date;
}
