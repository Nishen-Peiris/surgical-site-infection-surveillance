import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PatientsDetailsComponent} from './surgical-site-infection-surveillance/register-patient/patients-details/patients-details.component';
import {AllPatientsComponent} from './surgical-site-infection-surveillance/all-patients/all-patients/all-patients.component';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, PatientsDetailsComponent, AllPatientsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
