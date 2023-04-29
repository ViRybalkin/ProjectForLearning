import {useCallback, useMemo, useState} from "react";

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type useHoverType = [boolean, UseHoverBind]


export const useHover = (): useHoverType => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setIsHovered(true)
    }, [])

    const onMouseLeave = useCallback(() => {
        setIsHovered(false)
    }, [])

    return useMemo(() => {
        return [isHovered, {onMouseEnter, onMouseLeave}]
    }, [isHovered, onMouseEnter, onMouseLeave])
}