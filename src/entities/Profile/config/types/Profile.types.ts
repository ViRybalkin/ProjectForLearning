import {AxiosInstance} from "axios";

export type ValidationErrorsType = 'INCORRECT_USER_DATA' | 'INCORRECT_AGE' | 'INCORRECT_COUNTRY' | 'NO_DATA' | 'SERVER_ERROR';

export interface ProfileDataTypes {
  first: string;
  lastname: string;
  currency: string;
  country: string;
  city: string;
  username: string;
  avatar: string;
  age?: number;
}

export interface ProfileTypes {
  data?: ProfileDataTypes;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
  validationError?: Array<ValidationErrorsType>
}

interface ThunkExtraArgumentsTypes {
  api: AxiosInstance;
}

export interface ProfileThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgumentsTypes;
}