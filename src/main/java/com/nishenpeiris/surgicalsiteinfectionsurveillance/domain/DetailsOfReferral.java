package com.nishenpeiris.surgicalsiteinfectionsurveillance.domain;

import com.nishenpeiris.surgicalsiteinfectionsurveillance.util.Referrer;

import java.time.LocalDate;

/**
 * Referral details of a patient
 *
 * @author Nishen Peiris
 */
public class DetailsOfReferral {
    private LocalDate dateOfFirstReferral;
    private Referrer referredBy;
    private LocalDate dateOfRegistryAtClinic;
    private LocalDate firstDateOfConsultantVisit;

    /**
     * Creates a new {@link DetailsOfReferral} from given date of referral, referrer, date of registry at clinic and first date of consultant visit
     *
     * @param dateOfFirstReferral
     * @param referredBy
     * @param dateOfRegistryAtClinic
     * @param firstDateOfConsultantVisit
     */
    public DetailsOfReferral(LocalDate dateOfFirstReferral, Referrer referredBy, LocalDate dateOfRegistryAtClinic, LocalDate firstDateOfConsultantVisit) {
        this.dateOfFirstReferral = dateOfFirstReferral;
        this.referredBy = referredBy;
        this.dateOfRegistryAtClinic = dateOfRegistryAtClinic;
        this.firstDateOfConsultantVisit = firstDateOfConsultantVisit;
    }
}
