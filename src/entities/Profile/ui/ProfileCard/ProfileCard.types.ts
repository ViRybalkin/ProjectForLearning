export interface ProfileCardDataTypes {
  first: string;
  lastname: string;
  currency: string;
  country: string;
  city: string;
  username: string;
  avatar: string;
  age?: number;
}

export interface ProfileCardProps {
  isLoading: boolean;
  error?: string;
  data?: ProfileCardDataTypes;
  readonly?: boolean;
  submitHandler: (data: ProfileCardDataTypes) => void;
}
