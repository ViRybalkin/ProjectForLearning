export type SpringType = typeof import('@react-spring/web');
export type GestureType = typeof import('@use-gesture/react')

export interface AnimationContextTypes {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoaded: boolean;
}