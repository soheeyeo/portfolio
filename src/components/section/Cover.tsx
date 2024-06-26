import styled from 'styled-components';
import { useRef, useState, useEffect, RefObject } from 'react';
import Typing from '../../utils/typing';
import Canvas from '../../utils/canvas';

const Section = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const Cover = () => {
    const sectionRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const resizeHandler = () => {
        if (sectionRef.current) {
            setWidth(sectionRef.current.clientWidth || 0);
            setHeight(sectionRef.current.clientHeight || 0);
        }
    };

    useEffect(() => {
        if (sectionRef.current) {
            resizeHandler();
        }

        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <Section ref={sectionRef}>
            <Typing />
            <Canvas width={width} height={height} />
        </Section>
    );
};

export default Cover;
