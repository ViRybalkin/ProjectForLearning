import {AxiosInstance} from "axios";

export interface ProfileDataTypes {
  first: string;
  lastname: string;
  age: number;
  currency: string;
  country: string;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileTypes {
  data?: ProfileDataTypes;
  error?: string;
  isLoading: boolean;
  readonly: boolean
}

interface ThunkExtraArgumentsTypes {
  api: AxiosInstance;
}

export interface ProfileThunkConfig {
  rejectValue: string;
  extra: ThunkExtraArgumentsTypes;
}