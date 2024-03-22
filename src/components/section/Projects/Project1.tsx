import styled, { keyframes, css } from 'styled-components';
import cover from '../../../assets/cover/whale_d.jpg';
import Modal from '../../modal/Modal';
import { useState } from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';

const animation = keyframes`
    0%{
        opacity: 0;
        transform: translate3d(-100px, 0, 0);
    }

    50%{
        opacity: 0;
        transform: translate3d(-50px, 0, 0);
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
    padding: 0 40px;
    margin-bottom: 200px;
    height: 70vh;
    cursor: pointer;
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
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top;
        -webkit-transform: scale(0, 1);
        -ms-transform: scale(0, 1);
        transform: scale(0, 1);
        -webkit-transition: transform 0.75s cubic-bezier(1, 0, 0, 1);
        transition: transform 0.75s cubic-bezier(1, 0, 0, 1);
        z-index: -1;
    }

    &:hover::before {
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top;
        -webkit-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        transform: scale(1, 1);
        transition-delay: 0.4s;
    }

    &:hover {
        transform: translate3d(0, -3px, 0);
        transition: all 0.75s ease 0s;
        transition-delay: 0.4s;
    }
`;

const ProjName = styled.h3`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 48px;
    font-weight: 500;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjDesc = styled.div`
    margin-top: 80px;
    font-family: ${(props) => props.theme.contentFont};
`;

const ProjContent = styled.p`
    margin-bottom: 40px;
    font-size: 20px;
`;

const ProjType = styled.p`
    margin-bottom: 40px;
    font-size: 16px;
`;

const ProjTechContainer = styled.ul`
    display: flex;
`;

const ProjTechLi = styled.li``;

const ProjTech = styled.span`
    margin-right: 20px;
    font-weight: 600;
    font-size: 18px;
`;

const ImgWrapper = styled.div`
    width: 45%;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const Project1 = ({ data }: IprojectProps) => {
    const proj = data[0];

    const stack = Object.values(data[0].stack).flat();

    const { ref, isInView } = useScrollAnimation();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOnClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Card ref={ref} view={isInView} onClick={handleOnClick}>
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
                    <Img src={cover} />
                </ImgWrapper>
            </Card>
            {isOpen && <Modal proj={proj} setIsOpen={setIsOpen} />}
        </>
    );
};

export default Project1;
