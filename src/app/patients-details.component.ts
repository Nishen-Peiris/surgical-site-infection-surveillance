import {Component} from '@angular/core';

const DISTRICTS: string[] = [
  'Ampara',
  'Anuradhapura',
  'Badulla',
  'Batticalloa',
  'Colombo',
  'Galle',
  'Gampaha',
  'Hambanthota',
  'Jafna',
  'Kaluthara',
  'Kandy',
  'Kegalle',
  'Kilinochchi',
  'Kurunegala',
  'Mannar',
  'Matale',
  'Matara',
  'Monaragala',
  'Mulathivu',
  'Nuwara Eliya',
  'Polonnaruwa',
  'Puttalam',
  'Rathnapura',
  'Trincomalee',
  'Vavuniya'
];

@Component({
  selector: 'patients-details',
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
