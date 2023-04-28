export interface AddCommentFormTypes {
    newComment: string;
}

export interface AddCommentFormProps {
    submitHandler: (form: AddCommentFormTypes) => void;
}

export interface AddCommentFormSliceTypes {
    error?: string
}
