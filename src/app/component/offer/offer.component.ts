import {Component, Input, OnInit} from '@angular/core';
import {Offer} from "../../model/offer.model";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  @Input()
  public offer: Offer;

  constructor() { }

  ngOnInit() {
  }

}
