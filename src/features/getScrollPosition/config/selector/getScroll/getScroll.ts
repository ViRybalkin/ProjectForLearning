import {createSelector} from "@reduxjs/toolkit";
import {AppStoreTypes} from "app";
import {getScrollPosition} from "../getScrollPosition/getScrollPosition";

export const getScroll = createSelector(getScrollPosition, (state: AppStoreTypes, path: string) => path,
    (scroll, path) => scroll[path] || 0)