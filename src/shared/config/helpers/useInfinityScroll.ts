import {MutableRefObject, useEffect} from "react";

interface useInfinityScrollProps {
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
    callback?: () => void;
}

export const useInfinityScroll = ({callback, triggerRef, wrapperRef}: useInfinityScrollProps) => {
    let observer: IntersectionObserver | null;
    useEffect(() => {
        const triggerElement = triggerRef.current
        const wrapperElement = wrapperRef.current
        const option = {
            root: wrapperElement,
            rootMargin: "0px",
            threshold: 1.0
        };
        if (callback) {


            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, option);
            observer.observe(triggerElement)
        }

        return () => {
            if (observer) {
                observer?.unobserve(triggerElement);
            }
        }
    }, [triggerRef, wrapperRef, callback]);

}