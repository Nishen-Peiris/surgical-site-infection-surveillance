import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PatientsDetailsComponent} from './surgical-site-infection-surveillance/register-patient/patients-details/patients-details.component';
import {AllPatientsComponent} from './surgical-site-infection-surveillance/all-patients/all-patients/all-patients.component';

const routes: Routes = [
  {path: 'register-patient', component: PatientsDetailsComponent},
  {path: 'all-patients', component: AllPatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
