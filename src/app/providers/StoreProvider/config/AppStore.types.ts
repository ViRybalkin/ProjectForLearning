import {UserSliceTypes} from "entities";
import {AuthByUserNameTypes} from "features";

export interface AppStoreTypes {
  user: UserSliceTypes,
  login: AuthByUserNameTypes,
}
