import {useContext} from "react";
import {AnimationContext} from "./AnimationContext";
import {AnimationContextTypes} from "./AnimationContext.types";

export const useAnimationContext = () => {
    return useContext(AnimationContext) as Required<AnimationContextTypes>;
}