import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

const cursor = keyframes`
    0%, 50%, 100% {
        opacity: 1;
    }

    25%, 75% {
        opacity: 0;
    }
`;

const Txt = styled.h1`
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    font-family: 'DM Serif Display', serif;
    font-size: 95px;
    text-align: center;
    white-space: pre-wrap;
    transform: translate(-50%, -50%);
`;

const Cursor = styled.div`
    display: inline-block;
    margin-left: 15px;
    vertical-align: top;
    width: 2px;
    height: 96px;
    background-color: #fff;
    animation: ${cursor} 1s step-end infinite;
`;

const Typing = () => {
    const text = 'User-focused \n Frontend Developer';
    const [type, setType] = useState<string>('');
    const [index, setIndex] = useState<number>(0);
    const [isTypingDone, setIsTypingDone] = useState<boolean>(false);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (isTypingDone) {
                clearInterval(typingInterval);
                return;
            }
            if (index >= text.length) {
                setIsTypingDone(true);
                return;
            }

            const currentType = text[index];
            setType((prev) => prev + currentType);

            if (currentType === '\n') {
                setIndex((prev) => prev + 2);
            } else {
                setIndex((prev) => prev + 1);
            }
        }, 200);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, index, isTypingDone]);

    return (
        <Txt>
            {type}
            <Cursor />
        </Txt>
    );
};

export default Typing;
