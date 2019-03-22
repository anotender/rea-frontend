import {Component, OnInit} from '@angular/core';
import {Offer} from "../../model/offer.model";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  private offers: Offer[] = [
    {title: "Title1"},
    {title: "Title2"},
    {title: "Title3"},
    {title: "Title4"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
