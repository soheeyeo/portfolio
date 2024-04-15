import styled, { keyframes, css } from 'styled-components';
import Modal from '../../modal/Modal';
import { useState } from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import useMouseHandler from '../../../hooks/useMouseHandler';

const animation = keyframes`
    0%{
        opacity: 0;
        transform: translate3d(100px, 0, 0);
    }

    50%{
        opacity: 0;
        transform: translate3d(50px, 0, 0);
    }

    100%{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const Card = styled.div<{ view: boolean }>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;
    margin-bottom: 200px;
    transition: all 0.75s ease 0s;
    opacity: ${(props) => (props.view ? 1 : 0)};
    animation: ${(props) =>
        props.view &&
        css`
            ${animation} 1s
        `};

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0%;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(62, 50, 79, 0.2);
        border-radius: 30px;
        -webkit-transform-origin: right top;
        -ms-transform-origin: right top;
        transform-origin: right top;
        -webkit-transform: scale(0, 1);
        -ms-transform: scale(0, 1);
        transform: scale(0, 1);
        -webkit-transition: transform 0.75s cubic-bezier(1, 0, 0, 1);
        transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
        z-index: -1;
    }

    &:hover::before {
        -webkit-transform-origin: right top;
        -ms-transform-origin: right top;
        transform-origin: right top;
        -webkit-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        transform: scale(1, 1);
        transition-delay: 0.4s;
    }

    &:hover {
        transform: translate3d(0, -3px, 0);
        transition: all 0.75s ease 0s;
        transition-delay: 0.5s;
    }

    @media screen and (max-width: 1200px) {
        padding: 40px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.25rem;
        text-align: center;
    }
`;

const ProjName = styled.h3`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 48px;
    font-weight: 500;

    @media screen and (max-width: 1200px) {
        font-size: 2.75rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.25rem;
        text-align: center;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    word-break: keep-all;
    white-space: pre-wrap;

    @media screen and (max-width: 1200px) {
        width: 50%;
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;
        width: 100%;
        text-align: center;
    }
`;

const ProjDesc = styled.div`
    margin-top: 80px;
    font-family: ${(props) => props.theme.contentFont};

    @media screen and (max-width: 768px) {
        margin-top: 40px;
    }
`;

const ProjContent = styled.p`
    margin-bottom: 40px;
    font-size: 20px;

    @media screen and (max-width: 1200px) {
        font-size: 1rem;
        line-height: 2;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

const ProjType = styled.p`
    margin-bottom: 40px;
    font-size: 16px;

    @media screen and (max-width: 1200px) {
        font-size: 0.875rem;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

const ProjTechContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

const ProjTechLi = styled.li``;

const ProjTech = styled.span`
    margin-right: 20px;
    font-weight: 600;
    font-size: 18px;

    @media screen and (max-width: 1200px) {
        font-size: 1rem;
    }
`;

const ImgWrapper = styled.div`
    width: 45%;

    @media screen and (max-width: 1200px) {
        width: 40%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const Cursor = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    font-size: 14px;
    font-family: ${(props) => props.theme.titleFont};
    background-color: rgb(200, 182, 255, 0.7);
    color: #fff;
    border-radius: 50%;
    pointer-events: none;

    @media screen and (max-width: 480px) {
        width: 60px;
        height: 60px;
    }
`;

const Project3 = ({ data }: IprojectProps) => {
    const proj = data[2];

    const stack = Object.values(data[2].stack).flat();

    const options = {
        rootMargin: '-10% 0px',
    };

    const { animationRef, isInView } = useScrollAnimation(options);

    const { cardRef, mouseRef, xy } = useMouseHandler();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div ref={cardRef}>
                <Card
                    ref={animationRef}
                    view={isInView}
                    onClick={handleOnClick}
                >
                    <ContentContainer>
                        <ProjName>{proj.name}</ProjName>
                        <ProjDesc>
                            <ProjContent>{proj.intro}</ProjContent>
                            <ProjType>{proj.type}</ProjType>
                            <ProjTechContainer>
                                {stack.map((a, i) => {
                                    return (
                                        <ProjTechLi key={i}>
                                            <ProjTech>{a}</ProjTech>
                                        </ProjTechLi>
                                    );
                                })}
                            </ProjTechContainer>
                        </ProjDesc>
                    </ContentContainer>
                    <ImgWrapper>
                        <Img
                            src={require(
                                '../../../assets/cover/' + proj.src[0] + '.jpg',
                            )}
                        />
                    </ImgWrapper>
                    <Cursor
                        ref={mouseRef}
                        style={{
                            left: `${xy.x}px`,
                            top: `${xy.y}px`,
                            opacity: xy.x && xy.y ? 1 : 0,
                        }}
                    >
                        Learn More
                    </Cursor>
                </Card>
            </div>
            {isOpen && (
                <Modal proj={proj} setIsOpen={setIsOpen} isopen={isOpen} />
            )}
        </>
    );
};

export default Project3;
