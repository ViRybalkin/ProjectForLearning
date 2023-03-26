export interface ProfileCardDataTypes {
  first: string;
  lastname: string;
  age: number;
  currency: string;
  country: string;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileCardProps {
  data?: ProfileCardDataTypes;
  readonly?: boolean;
}
