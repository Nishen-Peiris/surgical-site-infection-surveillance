import {Component} from '@angular/core';

import {REFERRED_BYS} from '../../shared/referred-bys';
import {INSTITUTES_OF_REFERRAL} from '../../shared/institutes-of-referral';

@Component({
  templateUrl: './all-patients.component.html'
})

export class AllPatientsComponent {
  dateOfFirstReferral: Date;
  referredBy: string;
  instituteOfReferral: string;
  dateOfRegistryAtClinic: Date;
  firstDateOfConsultantsVisit: Date;
  referedBys = REFERRED_BYS;
  institutesOfReferral = INSTITUTES_OF_REFERRAL;
}
