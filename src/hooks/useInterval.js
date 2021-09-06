import { useRef, useEffect } from "react";

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    })

    useEffect(() => {
        const tick = () => {
            if (typeof savedCallback?.current !== 'undefined') {
                savedCallback.current();
            }
        }

        if (delay != null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        } 
    }, [delay])
}