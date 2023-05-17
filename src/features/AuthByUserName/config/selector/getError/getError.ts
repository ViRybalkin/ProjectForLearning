import {createSelector} from "@reduxjs/toolkit";
import {AuthByUserNameTypes} from "../../types/AuthByUserName.types";
import {getUserData} from "../getUserData/getUserData";

export const getError = createSelector(getUserData, (state?: AuthByUserNameTypes) => state?.error);