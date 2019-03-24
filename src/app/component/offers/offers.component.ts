import {Component, OnInit} from '@angular/core';
import {Offer} from "../../model/offer.model";
import {OfferService} from "../../service/offer.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers: Offer[] = [];

  constructor(private offerService: OfferService) {
  }

  ngOnInit() {
    this.offerService
      .getOffers()
      .subscribe(offers => this.offers = offers);
  }

  openOffer(offer: Offer) {
    window.open(offer.offerUrl, '_blank');
  }

}
