import { useState, useRef, useEffect } from 'react';

const useMouseHandler = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef<HTMLDivElement>(null);
    const [xy, setXY] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const refElement = mouseRef.current;

        const mouseHandler = (e: MouseEvent) => {
            if (!cardRef.current) return;

            // cardRef 기준 상대 좌표 보정
            const { left, top } = cardRef.current.getBoundingClientRect();
            const refX = e.clientX;
            const refY = e.clientY;
            const radius = 40;
            const posX = refX - left - radius;
            const posY = refY - top - radius;
            setXY({ x: posX, y: posY });
        };

        cardRef.current?.addEventListener('mousemove', mouseHandler);

        // 마우스가 cardRef 요소 안으로 들어왔을 때
        const mouseEnterHandler = () => {
            if (cardRef.current && refElement) {
                refElement.style.display = 'flex';
            }
        };

        // 마우스가 cardRef 요소 밖으로 나갈 때
        const mouseLeaveHandler = () => {
            if (cardRef.current && refElement) {
                refElement.style.display = 'none';
            }
        };

        cardRef.current?.addEventListener('mouseenter', mouseEnterHandler);
        cardRef.current?.addEventListener('mouseleave', mouseLeaveHandler);

        return () => {
            cardRef.current?.removeEventListener('mousemove', mouseHandler);
            cardRef.current?.removeEventListener(
                'mouseenter',
                mouseEnterHandler,
            );
            cardRef.current?.removeEventListener(
                'mouseleave',
                mouseLeaveHandler,
            );
        };
    }, []);

    return {
        cardRef: cardRef,
        mouseRef: mouseRef,
        xy: xy,
    };
};

export default useMouseHandler;
