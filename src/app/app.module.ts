import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {OfferComponent} from './component/offer/offer.component';
import {OffersComponent} from './component/offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OfferComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
