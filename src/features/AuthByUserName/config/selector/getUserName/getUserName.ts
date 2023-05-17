import {createSelector} from "@reduxjs/toolkit";
import {AuthByUserNameTypes} from "features/AuthByUserName";
import {getUserData} from "../getUserData/getUserData";

export const getUserName = createSelector(getUserData, (state?: AuthByUserNameTypes) => state?.username)