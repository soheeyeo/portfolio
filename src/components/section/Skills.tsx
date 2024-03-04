import styled from 'styled-components';
import js from '../../assets/logo/js.png';
import ts from '../../assets/logo/ts.png';
import html from '../../assets/logo/html.png';
import css from '../../assets/logo/css.png';
// import react from '../../assets/logo/react.png';
// import styledComponent from '../../assets/logo/styledcomponent.png';
// import sass from '../../assets/logo/sass.png';
// import next from '../../assets/logo/next.png';
// import vue from '../../assets/logo/vue.png';
// import tailwind from '../../assets/logo/tailwind.png';
// import bootstrap from '../../assets/logo/bootstrap.png';
// import github from '../../assets/logo/github.png';
// import git from '../../assets/logo/git.png';
// import figma from '../../assets/logo/figma.png';

const Section = styled.section`
    margin: 60px auto 0;
    width: 80%;
    height: calc(100vh - 60px);
`;

const Title = styled.h1`
    padding: 80px 0 120px;
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

const SkillBox1 = styled.div``;

const SkillName1 = styled.p`
    padding-bottom: 8px;
    font-size: 20px;
    font-family: ${(props) => props.theme.contentFont};
    font-weight: 500;
    border-bottom: 1px solid #fff;
`;

const SkillContainer = styled.div``;

const SkillContent = styled.div`
    display: flex;
    margin-top: 20px;
`;

const ImgWrapper = styled.div`
    width: 50px;
`;

const Img = styled.img`
    width: 100%;
`;

const SkillDesc = styled.span``;

const Skills = () => {
    const skill = ['Front-End', 'Library', 'Framework', 'Tools'];
    const front = [js, ts, html, css];

    return (
        <Section>
            <Title>SKILLS</Title>
            <Content>
                {skill.map((i) => (
                    <SkillBox1 key={i}>
                        <SkillName1>{i}</SkillName1>
                        <SkillContainer>
                            {front.map((i) => (
                                <SkillContent key={i}>
                                    <ImgWrapper>
                                        <Img src={i} />
                                    </ImgWrapper>
                                    <SkillDesc></SkillDesc>
                                </SkillContent>
                            ))}
                        </SkillContainer>
                    </SkillBox1>
                ))}
            </Content>
        </Section>
    );
};

export default Skills;
