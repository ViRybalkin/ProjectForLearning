import {FeatureFlagTypes} from "@/shared/types";

export type RolesTypes = 'ADMIN' | 'MANAGER' | 'USER';

export interface UserSliceTypes {
    username: string;
    id: string;
    avatar: string;
    isAuth: boolean;
    roles?: Array<RolesTypes>;
    _inited?: boolean;
    featureFlags?: FeatureFlagTypes;
}
