import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PatientsDetailsComponent} from './patients-details.component';

const routes: Routes = [
  {path: 'patients-details', component: PatientsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
