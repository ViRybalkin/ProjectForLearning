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