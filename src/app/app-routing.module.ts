import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OffersComponent} from "./component/offers/offers.component";
import {StatisticsComponent} from "./component/statistics/statistics.component";

const routes: Routes = [
  {path: 'offers/:offerType', component: OffersComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: '**', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
