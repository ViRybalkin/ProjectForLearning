import {AppStoreTypes} from "app/providers/StoreProvider";

export const getScrollPosition = (state: AppStoreTypes) => state?.getPosition.scrollPosition;