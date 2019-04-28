import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OffersComponent} from "./component/offers/offers.component";
import {RegionStatisticsComponent} from "./component/statistics/region-statistics.component";
import {PricePredictionComponent} from "./component/price-prediction/price-prediction.component";

const routes: Routes = [
  {path: 'offers/:offerType', component: OffersComponent},
  {path: 'statistics', component: RegionStatisticsComponent},
  {path: 'prediction', component: PricePredictionComponent},
  {path: '**', component: RegionStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
