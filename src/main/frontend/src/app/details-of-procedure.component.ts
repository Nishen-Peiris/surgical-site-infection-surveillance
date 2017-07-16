import {Component} from '@angular/core';

@Component({
  templateUrl: './details-of-procedure.component.html'
})

export class DetailsOfProcedureComponent {
  procedure: string;
  dateOfProcedure: Date;


  dateOfFirstReferral: Date;
  referredBy: string;
  instituteOfReferral: string;
  dateOfRegistryAtClinic: Date;
  firstDateOfConsultantsVisit: Date;
}
