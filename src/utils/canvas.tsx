import { useEffect, useRef, RefObject } from 'react';

const Canvas = ({ width, height }: sizePropsType) => {
    const canvasRef: RefObject<HTMLCanvasElement> =
        useRef<HTMLCanvasElement>(null);

    const colors = [
        '#C8B6FF',
        '#E7C6FF',
        '#FFD6FF',
        '#FFDCE2',
        '#FFEAE5',
        '#C1C3F3',
        '#B8C0FF',
    ];

    const random = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    const isInside = (x: number, y: number): boolean => {
        const bRadius = height / 5;
        const bx = x - width / 2;
        const by = y - height / 2;
        return bx * bx + by * by <= bRadius * bRadius;
    };

    class Circle implements ICircle {
        x!: number;
        y!: number;
        radius!: number;
        vx!: number;
        vy!: number;
        color!: string;

        constructor() {
            this.x = width / 2;
            this.y = height / 2;
            this.radius = random(36, 50);
            this.vx = random(-2, 2);
            this.vy = random(-2, 2);
            this.color = colors[Math.floor(random(0, 7))];
        }

        update() {
            if (isInside(this.x, this.y)) {
                this.x += this.vx;
                this.y += this.vy;
                if (this.radius < 100) {
                    this.radius += 0.3;
                }
            } else {
                this.vx *= -0.5;
                this.vy *= -0.5;
                this.x += this.vx;
                this.y += this.vy;
            }
        }
        draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.closePath();
        }
    }

    const circles: Circle[] = [];

    const moveCircle = () => {
        const fin = 10 - circles.length;
        for (let i = 0; i < fin && i < 10; i++) {
            const circle = new Circle();
            circles.push(circle);
        }

        circles.forEach((circle) => {
            circle.update();
        });
    };

    const drawCircle = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#1a1c20';
        ctx.fillRect(0, 0, width, height);

        circles.forEach((circle) => {
            circle.draw(ctx);
        });

        requestAnimationFrame(() => drawCircle(ctx));
    };

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

        if (ctx) {
            setInterval(moveCircle, 10);
            drawCircle(ctx);
        }
    }, [width, height]);

    return (
        <>
            <canvas ref={canvasRef} />
        </>
    );
};

export default Canvas;
