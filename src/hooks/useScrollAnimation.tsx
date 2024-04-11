import { useRef, useState, useEffect } from 'react';

interface IScrollOptions {
    rootMargin: string;
}

const useScrollAnimation = (options: IScrollOptions) => {
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

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(callback, {
            ...options,
            root: null,
            threshold: 0,
        });
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [options]);
    console.log(options);

    return {
        isInView: isInView,
        animationRef: ref,
    };
};

export default useScrollAnimation;
