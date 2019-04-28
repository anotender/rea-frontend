import {Component, OnInit} from '@angular/core';
import {Offer} from "../../model/offer.model";
import {OfferService} from "../../service/offer.service";
import {take} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers: Offer[] = [];

  currentPage: number = 1;

  addressSearchText: string;

  minPrice: number;

  maxPrice: number;

  minArea: number;

  maxArea: number;

  propertyTypes: string[] = [];

  selectedPropertyType: string;

  vendors: string[] = [];

  selectedVendors: string[] = [];

  constructor(private offerService: OfferService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.propertyTypes = this.offerService.getPropertyTypes();
    this.vendors = this.offerService.getVendors();
    this.route.params.subscribe(params => {
      this.offerService
        .getOffersByOfferType(params['offerType'])
        .pipe(take(1))
        .subscribe(offers => this.offers = offers);
    });
  }

  openOffer(offer: Offer) {
    window.open(offer.offerUrl, '_blank');
  }

}
