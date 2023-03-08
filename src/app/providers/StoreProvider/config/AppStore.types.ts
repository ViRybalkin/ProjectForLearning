import {CounterState, UserSliceTypes} from "entities";
import {AuthByUserNameTypes} from "features";

export interface AppStoreTypes {
  counter: CounterState,
  user: UserSliceTypes,
  login: AuthByUserNameTypes,
}
