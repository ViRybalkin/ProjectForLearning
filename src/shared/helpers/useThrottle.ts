import {useCallback, useRef} from "react";

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const isThrottled = useRef(false)
    return useCallback((...args) => {
        if (!isThrottled.current) {
            callback(...args);
            isThrottled.current = true;
            setTimeout(() => {
                isThrottled.current = false
            }, delay)
        }

    }, [callback, delay])
}