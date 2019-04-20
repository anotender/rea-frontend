import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {OfferComponent} from './component/offer/offer.component';
import {OffersComponent} from './component/offers/offers.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import {NgxPaginationModule} from "ngx-pagination";
import {StatisticsComponent} from './component/statistics/statistics.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import {AddressFilterPipe} from './pipe/address-filter.pipe';
import {MinPriceFilterPipe} from "./pipe/min-price-filter.pipe";
import {MaxPriceFilterPipe} from "./pipe/max-price-filter.pipe";
import {MinAreaFilterPipe} from "./pipe/min-area-filter.pipe";
import {MaxAreaFilterPipe} from "./pipe/max-area-filter.pipe";
import {PropertyTypeFilterPipe} from "./pipe/property-type-filter.pipe";
import {VendorFilterPipe} from "./pipe/vendor-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OfferComponent,
    OffersComponent,
    StatisticsComponent,
    AddressFilterPipe,
    MinPriceFilterPipe,
    MaxPriceFilterPipe,
    MinAreaFilterPipe,
    MaxAreaFilterPipe,
    PropertyTypeFilterPipe,
    VendorFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    NgSelectModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
