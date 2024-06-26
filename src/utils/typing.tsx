import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef, RefObject } from 'react';

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
    width: 100%;
    top: 50%;
    left: 50%;
    font-family: 'DM Serif Display', serif;
    font-size: 94px;
    text-align: center;
    white-space: pre-wrap;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1200px) {
        font-size: 5.625rem;
    }

    @media screen and (max-width: 992px) {
        font-size: 5rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 3.375rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 3rem;
    }
`;

const Cursor = styled.div`
    display: inline-block;
    margin-left: 5px;
    vertical-align: top;
    width: 2px;
    height: 94px;
    background-color: #fff;
    animation: ${cursor} 1s step-end infinite;

    @media screen and (max-width: 1200px) {
        height: 5.625rem;
    }

    @media screen and (max-width: 992px) {
        height: 5rem;
    }

    @media screen and (max-width: 768px) {
        height: 3.375rem;
    }

    @media screen and (max-width: 480px) {
        height: 3rem;
    }

    @media screen and (max-width: 320px) {
        height: 3rem;
    }
`;

const Typing = () => {
    const text = 'User-focused \n Frontend Developer';
    const [letter, setLetter] = useState<string>('');
    const [index, setIndex] = useState<number>(0);
    const [isTypingDone, setIsTypingDone] = useState<boolean>(false);

    const txtRef: RefObject<HTMLHeadingElement> =
        useRef<HTMLHeadingElement>(null);

    const lastTimeStamp = useRef<number | null>(null);

    // 사용자의 화면에 txtRef가 보일 때 실행
    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIndex(0);
                    setLetter('');
                    setIsTypingDone(false);
                }
            });
        };

        const options = {
            threshold: 0,
        };

        if (txtRef.current) {
            const observer = new IntersectionObserver(callback, options);
            observer.observe(txtRef.current);

            return () => {
                observer.disconnect();
            };
        }
    }, []);

    // 타이핑 애니메이션 설정
    useEffect(() => {
        let animationFrameId: number;

        const typingAnimation = (timeStamp: number) => {
            if (isTypingDone) {
                cancelAnimationFrame(animationFrameId);
                return;
            }
            if (index >= text.length) {
                setIsTypingDone(true);
                return;
            }
            if (lastTimeStamp.current === null)
                lastTimeStamp.current = timeStamp;

            // 2500ms 이후 첫 글자 표시, 경과 시간 100ms 이후 다음 글자 표시
            const elapsed = timeStamp - lastTimeStamp.current;

            if (letter.length == 0 && elapsed > 2500) {
                const currentLetter = text[index];
                setLetter((prev) => {
                    const result = (prev += currentLetter);
                    return result;
                });
                setIndex((prev) => prev + 1);
            }
            if (letter.length > 0 && elapsed > 100) {
                lastTimeStamp.current = timeStamp;
                if (text.length > index) {
                    const currentLetter = text[index];
                    setLetter((prev) => {
                        const result = (prev += currentLetter);
                        return result;
                    });
                    if (currentLetter === '\n') {
                        setIndex((prev) => prev + 2);
                    } else {
                        setIndex((prev) => prev + 1);
                    }
                }
            }

            animationFrameId = requestAnimationFrame(typingAnimation);
        };

        animationFrameId = requestAnimationFrame(typingAnimation);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [text, index, isTypingDone]);

    return (
        <Txt ref={txtRef}>
            {letter}
            <Cursor />
        </Txt>
    );
};

export default Typing;
