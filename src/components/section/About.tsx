import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAbout } from '../../api';
import { AxiosResponse } from 'axios';

const Section = styled.section`
    margin: 60px auto 0;
    width: 80%;
    height: calc(100vh - 60px);
`;

const NameBox = styled.div`
    padding: 80px 0 120px;
    width: 100%;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 600;
    color: #c8b6ff;
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

const IntroContainer = styled.div`
    width: 70%;
`;

const Intro = styled.p`
    font-size: 18px;
    font-family: ${(props) => props.theme.contentFont};
    line-height: 3;
    word-break: keep-all;
    white-space: pre-wrap;
    color: #fff;
`;

const About = () => {
    const [data, setData] = useState<Iabout[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
        <Section>
            <h1 className="a11yhidden">ABOUT</h1>
            <NameBox>
                <Name>SOHEE YEO</Name>
            </NameBox>
            {isLoading ? (
                <ContentsContainer>
                    <IntroBtn>
                        <IntroTxt>Intro</IntroTxt>
                    </IntroBtn>
                    <IntroContainer>
                        <Intro>{data[0].info}</Intro>
                    </IntroContainer>
                </ContentsContainer>
            ) : (
                ''
            )}
        </Section>
    );
};

export default About;
