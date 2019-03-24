import {Injectable} from '@angular/core';
import {Offer} from "../model/offer.model";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private orders: Offer[] = [
    {
      offerUrl: "https://www.morizon.pl/oferta/wynajem-dom-warszawa-wilanow-180m2-mzn2033156515",
      imageUrl: "https://img2.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL2xvNzkvNy9sbzc5X2R3XzEzMDAzNzcxXzEuanBnI3Y9MV8xMjMyNzc5MjM2/832/468/2/dom-do-wynajecia-warszawa-wilanow-180-m-morizon-pl-6515.jpg",
      title: "Warszawa, Wilanów",
      address: "Warszawa, Wilanów",
      area: 180,
      numberOfRooms: 5,
      price: 9000
    },
    {
      offerUrl: "https://www.morizon.pl/oferta/wynajem-dom-warszawa-wilanow-400m2-mzn2033156518",
      imageUrl: "https://img3.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL2xvNzkvZC9sbzc5X2R3XzEzMDAzNzg5XzEuanBnI3Y9MV8xMjMyNzc5Mjg1/832/468/2/dom-do-wynajecia-warszawa-wilanow-400-m-morizon-pl-6518.jpg",
      title: "Warszawa, Wilanów",
      address: "Warszawa, Wilanów",
      area: 400,
      numberOfRooms: 7,
      price: 15000
    },
    {
      offerUrl: "https://www.morizon.pl/oferta/wynajem-dom-piaseczynski-piaseczno-iglasta-160m2-mzn2033157285",
      imageUrl: "https://img2.staticmorizon.com.pl/thumbnail/aHR0cDovL2ltZy5tb3Jpem9uLnBsL25tNTkvNy9ubTU5X2R3Xzk0NTk4N18xLmpwZyN2PTFfMTIzNzA0ODcwNA==/832/468/2/dom-do-wynajecia-bobrowiec-iglasta-160-m-morizon-pl-7285.jpg",
      title: "Piaseczno, Bobrowiec, Iglasta",
      address: "Piaseczno, Bobrowiec, Iglasta",
      area: 160,
      numberOfRooms: 5,
      price: 4900
    }
  ];

  getOffers(): Observable<Offer[]> {
    return from([this.orders]);
  }

}
