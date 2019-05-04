import {Component, OnInit} from '@angular/core';
import {OfferService} from "../../service/offer.service";
import {Offer} from "../../model/offer.model";
import {PricePredictionService} from "../../service/price-prediction.service";

@Component({
  selector: 'app-price-prediction',
  templateUrl: './price-prediction.component.html',
  styleUrls: ['./price-prediction.component.css']
})
export class PricePredictionComponent implements OnInit {

  public offerTypes: string[] = [];

  public propertyTypes: string[] = [];

  public marketTypes: string[] = [];

  public offer: Offer = new Offer();

  public predictedPrice: number;

  constructor(private offerService: OfferService,
              private pricePredictionService: PricePredictionService) {
  }

  ngOnInit() {
    this.offerTypes = this.offerService.getOfferTypes();
    this.propertyTypes = this.offerService.getPropertyTypes();
    this.marketTypes = this.offerService.getMarketTypes();
  }

  calculatePrice() {
    this.pricePredictionService
      .calculatePriceForOffer(this.offer)
      .subscribe(predictedPrice => this.predictedPrice = predictedPrice);
  }

  isFormValid(): boolean {
    return [
      /*this.offer,
      this.offer.propertyType,
      this.offer.offerType,
      this.offer.area,
      this.offer.numberOfRooms,
      this.offer.floor,
      this.offer.yearOfConstruction*/
    ].every(this.isNotEmpty);
  }

  private isNotEmpty(val: any): boolean {
    return !!val && val !== null;
  }

}
