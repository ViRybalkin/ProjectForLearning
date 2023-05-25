import {createContext} from "react";
import {AnimationContextTypes} from "./AnimationContext.types";

export const AnimationContext = createContext<AnimationContextTypes>({isLoaded: false})