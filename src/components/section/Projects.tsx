import styled, { keyframes, css } from 'styled-components';
import { MutableRefObject, forwardRef, useEffect, useState } from 'react';
import { getProjects } from '../../api';
import { AxiosResponse } from 'axios';
import Project1 from './Projects/Project1';
import Project2 from './Projects/Project2';
import Project3 from './Projects/Project3';
import Project4 from './Projects/Project4';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Section = styled.section`
    margin: 60px auto 0;
    width: 80%;
    height: 100%;
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

const Projects = forwardRef((_, ref) => {
    const [data, setData] = useState<Iprojects[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { animationRef, isInView } = useScrollAnimation();

    const { current } = ref as MutableRefObject<HTMLElement[]>;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (): void => {
        getProjects()
            .then((res: AxiosResponse<ApiProjectsType> | undefined) => {
                if (res) {
                    setData(res.data.projects);
                    setIsLoading(true);
                }
            })
            .catch((err: Error) => console.log(err));
    };

    return (
        <Section
            ref={(projectsRef) => {
                if (ref && current && projectsRef) {
                    current[1] = projectsRef;
                }
            }}
        >
            <Title ref={animationRef} view={isInView}>
                PROJECTS
            </Title>
            {isLoading && (
                <>
                    <Project3 data={data} />
                    <Project2 data={data} />
                    <Project1 data={data} />
                    <Project4 data={data} />
                </>
            )}
        </Section>
    );
});

Projects.displayName = 'Projects';

export default Projects;
