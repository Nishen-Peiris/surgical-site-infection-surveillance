import {Component} from '@angular/core';

import {DISTRICTS} from './districts';

@Component({
  templateUrl: './patients-details.component.html'
})

export class PatientsDetailsComponent {
  id: number;
  serialNumber: number;
  dateOfDataEntry: Date;
  surname: string;
  firstName: string;
  nameWithInitials: string;
  gender: string;
  dateOfBirth: Date;
  presentAge: Date;
  ageOnPresentation: Date;
  address: string;
  districtOfResidence: string;
  mobileNumber: string;
  landLineNumber: string;
  preferredModeOfCommunication: string;
  districts = DISTRICTS;
}
