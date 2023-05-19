import {rtkApi} from "shared/config/api/rtkApi";
import {NotificationListTypes} from "../types/NotificationListTypes.types";


const getNotifications = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Array<NotificationListTypes>, void>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
})

export const {useGetNotificationsQuery} = getNotifications;