import styled, { keyframes, css } from 'styled-components';
import { MutableRefObject, forwardRef, useEffect, useState } from 'react';
import { getAbout } from '../../api';
import { AxiosResponse } from 'axios';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Section = styled.section`
    margin: 60px auto 0;
    width: 80%;
    height: calc(100vh - 60px);
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

const NameBox = styled.div<{ view: boolean }>`
    padding: 80px 0 120px;
    width: 100%;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 600;
    color: #c8b6ff;
    opacity: ${(props) => (props.view ? 1 : 0)};
    animation: ${(props) =>
        props.view &&
        css`
            ${animation} 1s ease-in-out
        `};
`;

const Name = styled.p`
    font-size: 64px;
`;

const ContentsContainer = styled.div`
    display: flex;
    padding-left: 100px;
    gap: 140px;
`;

const IntroBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    border: 0.5px solid #cac3e1;
    border-radius: 50%;
`;

const IntroTxt = styled.span`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 20px;
    color: #cac3e1;
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

const IntroContainer = styled.div<{ view: boolean }>`
    width: 70%;
    opacity: ${(props) => (props.view ? 1 : 0)};
    animation: ${(props) =>
        props.view &&
        css`
            ${introAnimation} 1s ease-in-out
        `};
`;

const Intro = styled.p`
    font-size: 18px;
    font-family: ${(props) => props.theme.contentFont};
    line-height: 3;
    word-break: keep-all;
    white-space: pre-wrap;
    color: #fff;
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
            <NameBox ref={animationRef} view={isInView}>
                <Name>SOHEE YEO</Name>
            </NameBox>
            {isLoading ? (
                <ContentsContainer>
                    <IntroBtn>
                        <IntroTxt>Intro</IntroTxt>
                    </IntroBtn>
                    <IntroContainer ref={animationRef} view={isInView}>
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
