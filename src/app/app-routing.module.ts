import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OffersComponent} from "./component/offers/offers.component";

const routes: Routes = [
  {path: 'offers', component: OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
