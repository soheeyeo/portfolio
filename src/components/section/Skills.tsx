import styled, { keyframes, css } from 'styled-components';
import { useState, useEffect, forwardRef, MutableRefObject } from 'react';
import { getSkills } from '../../api';
import { AxiosResponse } from 'axios';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Section = styled.section`
    margin: 60px auto 0;

    width: 80%;
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

const Title = styled.h1<{ $view: boolean }>`
    padding: 80px 0;
    font-size: 64px;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 600;
    color: #c8b6ff;
    opacity: ${(props) => (props.$view ? 1 : 0)};
    animation: ${(props) =>
        props.$view &&
        css`
            ${animation} 1s ease-in-out
        `};

    @media screen and (max-width: 1200px) {
        padding-bottom: 60px;
        font-size: 3.75rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 480px) {
        padding-bottom: 50px;
        font-size: 3.25rem;
        text-align: center;
    }
`;

const contentAnimation = keyframes`
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

const Content = styled.div<{ $view: boolean }>`
    display: grid;
    gap: 60px;
    grid-template-columns: repeat(2, 1fr);

    opacity: ${(props) => (props.$view ? 1 : 0)};
    animation: ${(props) =>
        props.$view &&
        css`
            ${contentAnimation} 1s ease-in-out
        `};

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 480px) {
    }
`;

const SkillBox = styled.div`
    font-family: ${(props) => props.theme.contentFont};
`;

const SkillName1 = styled.p`
    padding-bottom: 8px;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid #fff;
`;

const SkillContainerFlat = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;

const SkillContent = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
`;

const ImgWrapper = styled.div`
    width: 50px;
`;

const Img = styled.img`
    width: 100%;
`;

const SkillDesc = styled.span`
    width: 80%;
    word-break: keep-all;
    white-space: pre-wrap;
    line-height: 1.5;
`;

const Skills = forwardRef((_, ref) => {
    const [data, setData] = useState<Iskills[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        rootMargin: '0px',
    };

    const { animationRef, isInView } = useScrollAnimation(options);

    const { current } = ref as MutableRefObject<HTMLElement[]>;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (): void => {
        getSkills()
            .then((res: AxiosResponse<ApiSkillsType> | undefined) => {
                if (res) {
                    setData(res.data.skills);
                    setIsLoading(true);
                }
            })
            .catch((err: Error) => console.log(err));
    };

    const frontendItems = data.filter((item) => item.category === 'Front-end');

    const libraryItems = data.filter((item) => item.category === 'Library');

    const frameworkItems = data.filter((item) => item.category === 'Framework');

    const toolsItems = data.filter((item) => item.category === 'Tools');

    return (
        <Section
            ref={(skillsRef) => {
                if (ref && current && skillsRef) {
                    current[2] = skillsRef;
                }
            }}
        >
            <Title ref={animationRef} $view={isInView}>
                SKILLS
            </Title>
            {isLoading && (
                <Content ref={animationRef} $view={isInView}>
                    <SkillBox>
                        <SkillName1>Front-End</SkillName1>
                        <div>
                            {frontendItems.map((a) => (
                                <SkillContent key={a._id}>
                                    <ImgWrapper>
                                        <Img
                                            src={require(
                                                '../../assets/logo/' +
                                                    a.src +
                                                    '.png',
                                            )}
                                        />
                                    </ImgWrapper>
                                    <SkillDesc>{a.content}</SkillDesc>
                                </SkillContent>
                            ))}
                        </div>
                    </SkillBox>
                    <SkillBox>
                        <SkillName1>Framework</SkillName1>
                        <div>
                            {frameworkItems.map((a, i) => (
                                <SkillContent key={i}>
                                    <ImgWrapper>
                                        <Img
                                            src={require(
                                                '../../assets/logo/' +
                                                    a.src +
                                                    '.png',
                                            )}
                                        />
                                    </ImgWrapper>
                                    <SkillDesc>{a.content}</SkillDesc>
                                </SkillContent>
                            ))}
                        </div>
                    </SkillBox>
                    <SkillBox>
                        <SkillName1>Library</SkillName1>
                        <div>
                            {libraryItems.map((a, i) => (
                                <SkillContent key={i}>
                                    <ImgWrapper>
                                        <Img
                                            src={require(
                                                '../../assets/logo/' +
                                                    a.src +
                                                    '.png',
                                            )}
                                        />
                                    </ImgWrapper>
                                    <SkillDesc>{a.content}</SkillDesc>
                                </SkillContent>
                            ))}
                        </div>
                    </SkillBox>
                    <SkillBox>
                        <SkillName1>Tools</SkillName1>
                        <SkillContainerFlat>
                            {toolsItems.map((a, i) => (
                                <div key={i}>
                                    <ImgWrapper>
                                        <Img
                                            src={require(
                                                '../../assets/logo/' +
                                                    a.src +
                                                    '.png',
                                            )}
                                        />
                                    </ImgWrapper>
                                </div>
                            ))}
                        </SkillContainerFlat>
                    </SkillBox>
                </Content>
            )}
        </Section>
    );
});

Skills.displayName = 'Skills';

export default Skills;
