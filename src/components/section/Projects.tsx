import styled from 'styled-components';

const Section = styled.section`
    margin: 0 auto;
    width: 80%;
`;

const Title = styled.h1`
    margin: 80px 0;
    font-size: 64px;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 600;
    color: #c8b6ff;
`;

const Projects = () => {
    return (
        <Section>
            <Title>PROJECTS</Title>
        </Section>
    );
};

export default Projects;
