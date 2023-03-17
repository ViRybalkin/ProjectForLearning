import {createSelector} from "@reduxjs/toolkit";
import {AuthByUserNameTypes} from "features";
import {getUserData} from "../getUserData";

export const getIsLoading = createSelector(getUserData, (state?: AuthByUserNameTypes) => state?.isLoading)