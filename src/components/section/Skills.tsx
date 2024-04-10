import styled, { keyframes, css } from 'styled-components';
import { useState, useEffect, forwardRef, MutableRefObject } from 'react';
import { getSkills } from '../../api';
import { AxiosResponse } from 'axios';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Section = styled.section`
    margin: 60px auto;
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

const Title = styled.h1<{ view: boolean }>`
    padding: 80px 0;
    font-size: 64px;
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

const Content = styled.div`
    display: grid;
    gap: 60px;
    grid-template-columns: repeat(2, 1fr);
`;

const nameAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translate3d(-30px, 0, 0);
    }

    100%{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const SkillBox = styled.div<{ view: boolean }>`
    font-family: ${(props) => props.theme.contentFont};
    opacity: ${(props) => (props.view ? 1 : 0)};
    animation: ${(props) =>
        props.view &&
        css`
            ${nameAnimation} 1s ease-in-out
        `};
`;

const SkillName1 = styled.p`
    padding-bottom: 8px;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid #fff;
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

const SkillContainer = styled.div<{ view: boolean }>`
    opacity: ${(props) => (props.view ? 1 : 0)};
    animation: ${(props) =>
        props.view &&
        css`
            ${contentAnimation} 1s ease-in-out
        `};
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

const SkillContentFlat = styled.div<{ view: boolean }>`
    opacity: ${(props) => (props.view ? 1 : 0)};
    animation: ${(props) =>
        props.view &&
        css`
            ${contentAnimation} 1s ease-in-out
        `};
`;

const ImgWrapper = styled.div`
    width: 50px;
`;

const Img = styled.img`
    width: 100%;
`;

const SkillDesc = styled.span``;

const Skills = forwardRef((_, ref) => {
    const [data, setData] = useState<Iskills[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { animationRef, isInView } = useScrollAnimation();

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
            <Title ref={animationRef} view={isInView}>
                SKILLS
            </Title>
            {isLoading && (
                <Content>
                    <SkillBox ref={animationRef} view={isInView}>
                        <SkillName1>Front-End</SkillName1>
                        <SkillContainer ref={animationRef} view={isInView}>
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
                        </SkillContainer>
                    </SkillBox>
                    <SkillBox ref={animationRef} view={isInView}>
                        <SkillName1>Framework</SkillName1>
                        <SkillContainer ref={animationRef} view={isInView}>
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
                        </SkillContainer>
                    </SkillBox>
                    <SkillBox ref={animationRef} view={isInView}>
                        <SkillName1>Library</SkillName1>
                        <SkillContainer ref={animationRef} view={isInView}>
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
                        </SkillContainer>
                    </SkillBox>
                    <SkillBox ref={animationRef} view={isInView}>
                        <SkillName1>Tools</SkillName1>
                        <SkillContainerFlat>
                            {toolsItems.map((a, i) => (
                                <SkillContentFlat
                                    key={i}
                                    ref={animationRef}
                                    view={isInView}
                                >
                                    <ImgWrapper>
                                        <Img
                                            src={require(
                                                '../../assets/logo/' +
                                                    a.src +
                                                    '.png',
                                            )}
                                        />
                                    </ImgWrapper>
                                </SkillContentFlat>
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
