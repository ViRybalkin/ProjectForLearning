import {Comment} from "entities";
import {EntityState} from "@reduxjs/toolkit";

export interface ArticleDetailsCommentTypes extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}