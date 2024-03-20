import { useRef, useState, useEffect } from 'react';

const useScrollAnimation = () => {
    const [isInView, setIsInView] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsInView(true);
            } else {
                setIsInView(false);
            }
        });
    };

    const options = {
        root: null,
        rootMargin: '-10% 0px',
        threshold: 0,
    };

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return {
        isInView: isInView,
        ref: ref,
    };
};

export default useScrollAnimation;
