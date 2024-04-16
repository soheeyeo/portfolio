import styled, { keyframes, css } from 'styled-components';
import { MutableRefObject, forwardRef, useEffect, useState } from 'react';
import { getAbout } from '../../api';
import { AxiosResponse } from 'axios';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Section = styled.section`
    margin: 60px auto 0;
    width: 80%;
    height: calc(100vh - 60px);

    @media screen and (max-width: 480px) {
        height: 100%;
    }
`;

const animation = keyframes`
    0%{
        opacity: 0;
        transform: translate3d(-30px, 0, 0);
    }

    100%{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const NameBox = styled.div<{ $view: boolean }>`
    padding: 80px 0 120px;
    width: 100%;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 600;
    color: #c8b6ff;
    opacity: ${(props) => (props.$view ? 1 : 0)};
    animation: ${(props) =>
        props.$view &&
        css`
            ${animation} 1s ease-in-out
        `};

    @media screen and (max-width: 768px) {
        padding: 0 0 80px;
    }

    @media screen and (max-width: 480px) {
        padding: 0 0 50px;
    }
`;

const Name = styled.p`
    font-size: 64px;

    @media screen and (max-width: 1200px) {
        font-size: 3.75rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 3.25rem;
        text-align: center;
    }
`;

const ContentsContainer = styled.div`
    display: flex;
    padding-left: 100px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1200px) {
        padding-left: 60px;
    }

    @media screen and (max-width: 992px) {
        padding-left: 30px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding-left: 0px;
        gap: 50px;
    }

    @media screen and (max-width: 480px) {
        gap: 30px;
    }
`;

const IntroBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    border: 0.5px solid #cac3e1;
    border-radius: 50%;

    @media screen and (max-width: 1200px) {
        width: 140px;
        height: 140px;
    }

    @media screen and (max-width: 768px) {
        width: 120px;
        height: 120px;
    }

    @media screen and (max-width: 480px) {
        width: 105px;
        height: 105px;
    }
`;

const IntroTxt = styled.span`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 20px;
    color: #cac3e1;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

const introAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translate3d(0, -30px, 0);
    }

    60%{
        opacity: 0;
        transform: translate3d(0, -30px, 0);
    }

    100%{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const IntroContainer = styled.div<{ $view: boolean }>`
    width: 70%;
    opacity: ${(props) => (props.$view ? 1 : 0)};
    animation: ${(props) =>
        props.$view &&
        css`
            ${introAnimation} 1s ease-in-out
        `};

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Intro = styled.p`
    font-size: 18px;
    font-family: ${(props) => props.theme.contentFont};
    line-height: 3;
    word-break: keep-all;
    white-space: pre-wrap;
    color: #fff;

    @media screen and (max-width: 1200px) {
        font-size: 16px;
        text-align: center;
    }
`;

const About = forwardRef((_, ref) => {
    const [data, setData] = useState<Iabout[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        rootMargin: '-10% 0px',
    };

    const { animationRef, isInView } = useScrollAnimation(options);

    const { current } = ref as MutableRefObject<HTMLElement[]>;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (): void => {
        getAbout()
            .then((res: AxiosResponse<ApiAboutType> | undefined) => {
                if (res) {
                    setData(res.data.about);
                    setIsLoading(true);
                }
            })
            .catch((err: Error) => console.log(err));
    };

    return (
        <Section
            ref={(aboutRef) => {
                if (ref && current && aboutRef) {
                    current[0] = aboutRef;
                }
            }}
        >
            <h1 className="a11yhidden">ABOUT</h1>
            <NameBox ref={animationRef} $view={isInView}>
                <Name>SOHEE YEO</Name>
            </NameBox>
            {isLoading ? (
                <ContentsContainer>
                    <IntroBtn>
                        <IntroTxt>Intro</IntroTxt>
                    </IntroBtn>
                    <IntroContainer ref={animationRef} $view={isInView}>
                        <Intro>{data[0].info}</Intro>
                    </IntroContainer>
                </ContentsContainer>
            ) : (
                ''
            )}
        </Section>
    );
});

About.displayName = 'About';

export default About;
