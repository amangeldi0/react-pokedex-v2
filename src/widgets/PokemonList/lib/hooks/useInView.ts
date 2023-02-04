import {
    useRef,
    useState,
    useCallback
} from 'react';

export const useInView = () => {

    const ref = useRef<void | null>(null);

    const [inView, setInView] = useState(false);

    const setRef = useCallback((node: Element | null) => {
        if (!node) return;

        const observer = new IntersectionObserver(([entry]): void => {
            setInView(entry.isIntersecting);
        });

        ref.current = observer.observe(node);
    }, []);

    return { inView, ref: setRef };
};