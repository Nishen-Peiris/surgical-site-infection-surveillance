import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PatientsDetailsComponent} from './patients-details.component';
import {DetailsOfReferralComponent} from './details-of-referral.component';

const routes: Routes = [
  {path: 'patients-details', component: PatientsDetailsComponent},
  {path: 'details-of-referral', component: DetailsOfReferralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
