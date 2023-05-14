export interface AddCommentFormTypes {
  newComment: string;
}

export interface AddCommentFormProps {
  submitHandler: (form: AddCommentFormTypes) => void;
}
