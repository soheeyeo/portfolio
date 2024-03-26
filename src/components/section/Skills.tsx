import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getSkills } from '../../api';
import { AxiosResponse } from 'axios';

const Section = styled.section`
    margin: 60px auto 0;
    width: 80%;
    height: calc(100vh - 60px);
`;

const Title = styled.h1`
    padding: 80px 0;
    font-size: 64px;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 600;
    color: #c8b6ff;
`;

const Content = styled.div`
    display: grid;
    gap: 80px;
    grid-template-columns: repeat(2, 1fr);
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

const SkillContainer = styled.div``;

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

const SkillContentFlat = styled.div``;

const ImgWrapper = styled.div`
    width: 50px;
`;

const Img = styled.img`
    width: 100%;
`;

const SkillDesc = styled.span``;

const Skills = () => {
    const [data, setData] = useState<Iskills[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
        <Section>
            <Title>SKILLS</Title>
            {isLoading && (
                <Content>
                    <SkillBox>
                        <SkillName1>Front-End</SkillName1>
                        <SkillContainer>
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
                    <SkillBox>
                        <SkillName1>Framework</SkillName1>
                        <SkillContainer>
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
                    <SkillBox>
                        <SkillName1>Library</SkillName1>
                        <SkillContainer>
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
                    <SkillBox>
                        <SkillName1>Tools</SkillName1>
                        <SkillContainerFlat>
                            {toolsItems.map((a, i) => (
                                <SkillContentFlat key={i}>
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
};

export default Skills;
