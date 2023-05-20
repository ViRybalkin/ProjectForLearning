import {createSelector} from "@reduxjs/toolkit";
import {AuthByUserNameTypes} from "../types/AuthByUserName.types";
import {getUserData} from "./getUserData";

export const getUserPassword = createSelector(getUserData, (state?: AuthByUserNameTypes) => state?.password)