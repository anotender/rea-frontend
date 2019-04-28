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
import {RegionStatisticsComponent} from './component/statistics/region-statistics.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import {AddressFilterPipe} from './pipe/address-filter.pipe';
import {MinPriceFilterPipe} from "./pipe/min-price-filter.pipe";
import {MaxPriceFilterPipe} from "./pipe/max-price-filter.pipe";
import {MinAreaFilterPipe} from "./pipe/min-area-filter.pipe";
import {MaxAreaFilterPipe} from "./pipe/max-area-filter.pipe";
import {PropertyTypeFilterPipe} from "./pipe/property-type-filter.pipe";
import {VendorFilterPipe} from "./pipe/vendor-filter.pipe";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OfferAndPropertyTypeStatisticsComponent} from './component/offer-and-property-statistics/offer-and-property-type-statistics.component';
import {CommonStatisticsComponent} from './component/common-statistics/common-statistics.component';
import { PricePredictionComponent } from './component/price-prediction/price-prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OfferComponent,
    OffersComponent,
    RegionStatisticsComponent,
    AddressFilterPipe,
    MinPriceFilterPipe,
    MaxPriceFilterPipe,
    MinAreaFilterPipe,
    MaxAreaFilterPipe,
    PropertyTypeFilterPipe,
    VendorFilterPipe,
    OfferAndPropertyTypeStatisticsComponent,
    CommonStatisticsComponent,
    PricePredictionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    NgxChartsModule,
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
