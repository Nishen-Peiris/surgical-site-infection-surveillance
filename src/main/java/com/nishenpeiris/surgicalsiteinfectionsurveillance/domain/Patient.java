package com.nishenpeiris.surgicalsiteinfectionsurveillance.domain;

import com.nishenpeiris.surgicalsiteinfectionsurveillance.util.District;
import com.nishenpeiris.surgicalsiteinfectionsurveillance.util.Sex;

import java.time.LocalDate;

/**
 * The patient class represents a patient
 *
 * @author Nishen Peiris
 */
public class Patient extends AbstractEntity {
    private String surname;
    private String firstName;
    private String nameWithInitials;
    private Sex gender;
    private LocalDate dateOfBirth;
    private String address;
    private District districtOfResidence;
    private String mobile;
    private String landLine;
    private String preferredModeOfCommunication;
    private DetailsOfReferral detailsOfReferral;

    /**
     * Creates a new {@link Patient} from given surname, first name, name with initials, gender, date of birth, address, district of residence mobile, landLine, preferred mode of communication and details of referral object
     *
     * @param surname                      surname
     * @param firstName                    first name
     * @param nameWithInitials             name
     * @param gender                       gender
     * @param dateOfBirth                  date
     * @param address                      address
     * @param districtOfResidence          district of residence
     * @param mobile                       mobile number
     * @param landLine                     landLine number
     * @param preferredModeOfCommunication preferred mode of communication
     * @param detailsOfReferral            details of referral object
     */
    public Patient(String surname, String firstName, String nameWithInitials, Sex gender, LocalDate dateOfBirth, String address, District districtOfResidence, String mobile, String landLine, String preferredModeOfCommunication, DetailsOfReferral detailsOfReferral) {
        this.surname = surname;
        this.firstName = firstName;
        this.nameWithInitials = nameWithInitials;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.districtOfResidence = districtOfResidence;
        this.mobile = mobile;
        this.landLine = landLine;
        this.preferredModeOfCommunication = preferredModeOfCommunication;
        this.detailsOfReferral = detailsOfReferral;
    }

    protected Patient() {

    }

    /**
     * Returns the surname
     *
     * @return
     */
    public String getSurname() {
        return surname;
    }

    /**
     * Returns the first name
     *
     * @return
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Returns the name with initials
     *
     * @return
     */
    public String getNameWithInitials() {
        return nameWithInitials;
    }

    /**
     * Returns the gender
     *
     * @return
     */
    public Sex getGender() {
        return gender;
    }

    /**
     * Returns the date of birth
     *
     * @return
     */
    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    /**
     * Returns the address
     *
     * @return
     */
    public String getAddress() {
        return address;
    }

    /**
     * Returns the district of residence
     *
     * @return
     */
    public District getDistrictOfResidence() {
        return districtOfResidence;
    }

    /**
     * Returns the mobile number
     *
     * @return
     */
    public String getMobile() {
        return mobile;
    }

    /**
     * Returns the landLine number
     *
     * @return
     */
    public String getLandLine() {
        return landLine;
    }

    /**
     * Returns the preferred mode of communication
     *
     * @return
     */
    public String getPreferredModeOfCommunication() {
        return preferredModeOfCommunication;
    }

    /**
     * Returns the details of referral object
     *
     * @return
     */
    public DetailsOfReferral getDetailsOfReferral() {
        return detailsOfReferral;
    }
}
