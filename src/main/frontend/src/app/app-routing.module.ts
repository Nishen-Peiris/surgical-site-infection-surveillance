import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './surgical-site-infection-surveillance/home/home/home.component';
import {PatientsDetailsComponent} from './surgical-site-infection-surveillance/register-patient/patients-details/patients-details.component';
import {AllPatientsComponent} from './surgical-site-infection-surveillance/all-patients/all-patients/all-patients.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register-patient', component: PatientsDetailsComponent},
  {path: 'all-patients', component: AllPatientsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
