import styled from 'styled-components';
import Project1 from './Projects/Project1';

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

const Projects = () => {
    return (
        <Section>
            <Title>PROJECTS</Title>
            <Project1 />
        </Section>
    );
};

export default Projects;
