import { useEffect, useRef, RefObject } from 'react';

const Canvas = ({ width, height }: sizePropsType) => {
    const canvasRef: RefObject<HTMLCanvasElement> =
        useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        const setCanvas = () => {
            const devicePixelRatio = window.devicePixelRatio ?? 1;

            if (canvas && ctx) {
                canvas.style.width = width + 'px';
                canvas.style.height = height + 'px';

                canvas.width = width * devicePixelRatio;
                canvas.height = height * devicePixelRatio;

                ctx.scale(devicePixelRatio, devicePixelRatio);
            }
        };
        setCanvas();
    }, [width, height]);

    return (
        <>
            <canvas ref={canvasRef} />
        </>
    );
};

export default Canvas;
