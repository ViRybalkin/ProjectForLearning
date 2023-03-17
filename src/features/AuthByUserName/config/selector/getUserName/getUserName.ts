import {createSelector} from "@reduxjs/toolkit";
import {AuthByUserNameTypes} from "features";
import {getUserData} from "../getUserData";

export const getUserName = createSelector(getUserData, (state?: AuthByUserNameTypes) => state?.username)