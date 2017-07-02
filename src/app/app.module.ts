import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent} from './app.component';
import {PatientsDetailsComponent} from './patients-details.component';

import {AppRoutingModule}     from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, PatientsDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
