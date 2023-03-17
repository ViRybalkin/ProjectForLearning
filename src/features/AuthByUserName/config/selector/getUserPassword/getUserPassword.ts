import {createSelector} from "@reduxjs/toolkit";
import {AuthByUserNameTypes} from "features";
import {getUserData} from "../getUserData";

export const getUserPassword = createSelector(getUserData, (state?: AuthByUserNameTypes) => state?.password)