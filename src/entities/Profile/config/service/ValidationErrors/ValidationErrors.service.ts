import {ProfileDataTypes, ValidationErrorsType} from "entities";

export const validateProfile = (profileData?: ProfileDataTypes) => {
  const errors: ValidationErrorsType[] = []

  if (!profileData) {
    errors.push("NO_DATA")
  }


  if (!profileData?.lastname || !profileData?.first) {
    errors.push("INCORRECT_USER_DATA");
  }

  if (!profileData?.age || !Number(profileData?.age)) {
    errors.push("INCORRECT_AGE")
  }

  if (!profileData?.country) {
    errors.push("INCORRECT_COUNTRY")
  }

  return errors;
}