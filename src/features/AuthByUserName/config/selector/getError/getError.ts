import {AuthByUserNameTypes} from "features";
import {createSelector} from "@reduxjs/toolkit";
import {getUserData} from "../getUserData";

export const getError = createSelector(getUserData, (state: AuthByUserNameTypes) => state?.error);