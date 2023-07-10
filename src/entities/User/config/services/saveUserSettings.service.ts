import {createAsyncThunk} from "@reduxjs/toolkit";
import {handleError} from "@/shared/helpers/error";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {UserSettingsTypes} from "@/shared/types";
import {getUserSettings} from "../selectors/getUserSettings";
import {setUserSettingsMutation} from "../services/userApi.service";
import {getUser} from "../selectors/getUser";

export const saveUserSettingsService =
    createAsyncThunk<UserSettingsTypes | undefined, UserSettingsTypes, ThunkConfig<string>>(
        'saveUserSettingsService',
        async (userSettings, {dispatch, getState, rejectWithValue}) => {
            const user = getUser(getState());
            const currentSettings = getUserSettings(getState());

            if (!user) {
                rejectWithValue('');
            }

            try {
                const response = await dispatch(setUserSettingsMutation({
                    userId: user.id,
                    userSettings: {
                        ...currentSettings,
                        ...userSettings,
                    }
                })).unwrap();

                if (!response.userSettings) {
                    rejectWithValue('')
                }

                return response.userSettings;
            } catch (error) {

                const {data} = handleError(error)

                return rejectWithValue(data.message)
            }
        }
    )