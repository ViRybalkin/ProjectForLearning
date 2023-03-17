import {ThunkExtraArgumentsTypes} from "app";

export interface AuthByUserNameTypes {
  password: string;
  username: string;
  isLoading?: boolean;
  error?: string;
}

export interface UserData {
  username: string;
  password: string
}

export interface ThunkConfigTypes {
  rejectValue: string;
  extra: ThunkExtraArgumentsTypes;
}