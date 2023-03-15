import {AxiosInstance} from "axios";
import {NavigateFunction} from "react-router/dist/lib/hooks";

export interface AuthByUserNameTypes {
  password: string;
  username: string;
  error?: string;
  isLoading?: boolean;
}

export interface UserData {
  username: string;
  password: string
}

interface ThunkExtraArgumentsTypes {
  api: AxiosInstance;
  navigate: NavigateFunction;
}

export interface ThunkConfigTypes {
  rejectValue: string;
  extra: ThunkExtraArgumentsTypes;
}