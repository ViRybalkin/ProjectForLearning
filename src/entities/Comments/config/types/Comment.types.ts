interface UserData {
  username: string;
  id: string;
  avatar?: string;
}

export interface Comment {
  id: string
  user: UserData,
  comment: string
}