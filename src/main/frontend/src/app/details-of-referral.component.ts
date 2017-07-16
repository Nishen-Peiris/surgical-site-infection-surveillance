import {Component} from '@angular/core';

import {REFERRED_BYS} from './referred-bys';
import {INSTITUTES_OF_REFERRAL} from './institutes-of-referral';

@Component({
  templateUrl: './details-of-referral.component.html'
})

export class DetailsOfReferralComponent {
  dateOfFirstReferral: Date;
  referredBy: string;
  instituteOfReferral: string;
  dateOfRegistryAtClinic: Date;
  firstDateOfConsultantsVisit: Date;
  referedBys = REFERRED_BYS;
  institutesOfReferral = INSTITUTES_OF_REFERRAL;
}
