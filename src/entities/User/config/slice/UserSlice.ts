import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LOCAL_STORAGE_KEY} from '@/shared/constants/localStorageKey';
import {UserSliceTypes} from '../types/UserSlice.types';
import {setFeatureFlag} from "@/shared/featureFlag";
import {saveUserSettingsService} from '../services/saveUserSettings.service';
import {initAuthDataService} from '../services/initAuthData.service';

const initialState: UserSliceTypes = {
    _inited: false,
    avatar: '',
    id: '',
    isAuth: false,
    username: '',
};

export const userSlice = createSlice({
    extraReducers: (builder) => {
        builder.addCase(saveUserSettingsService.fulfilled, (state, action) => {
            if (action.payload) {
                state.userSettings = action.payload;
            }
        }).addCase(initAuthDataService.fulfilled, (state, action) => {
            if (action.payload) {
                state.userSettings = action.payload.userSettings
                setFeatureFlag(action.payload.featureFlags)
                state._inited = true;
                state.username = action.payload.username;
                state.id = action.payload.id;
                state.avatar = action.payload.avatar;
                state.roles = action.payload.roles;
                state.isAuth = true;
            }
        }).addCase(initAuthDataService.rejected, (state, action) => {
            state._inited = true;
        })
    },
    initialState,
    name: 'user',
    reducers: {
        logout(state: UserSliceTypes) {
            state.username = '';
            state.id = '';
            state.avatar = '';
            state.isAuth = false;
            state.roles = undefined;

            localStorage.removeItem(LOCAL_STORAGE_KEY.auth);
        },
        setUserData(state: UserSliceTypes, action: PayloadAction<UserSliceTypes>) {
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.avatar = action.payload.avatar;
            state.isAuth = action.payload.isAuth;
            state.roles = action.payload.roles;
            state.userSettings = action.payload.userSettings
            setFeatureFlag(action.payload.featureFlags);
        },
    },
});

export const userAction = userSlice.actions;
export const {reducer: userReducer} = userSlice;
