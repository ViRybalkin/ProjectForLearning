import {ProfileDataTypes, ValidationErrorsType} from "entities";

export const validateProfile = (profileData: ProfileDataTypes) => {
  const errors: ValidationErrorsType[] = []

  if(!profileData) {
    errors.push("NO_DATA")
  }

  const {age,avatar,first,lastname,country,city,username,currency} = profileData

  if(!lastname ||!first) {
    errors.push("INCORRECT_USER_DATA");
  }

  if(!age || !Number(age)) {
    errors.push("INCORRECT_AGE")
  }

  if(!country) {
    errors.push("INCORRECT_COUNTRY")
  }

  return errors;
}