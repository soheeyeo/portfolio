import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Project1 from './Projects/Project1';
import { getProjects } from '../../api';
import { AxiosResponse } from 'axios';

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
    const [data, setData] = useState<Iprojects[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
        <Section>
            <Title>PROJECTS</Title>
            {isLoading ? <Project1 data={data} /> : ''}
        </Section>
    );
};

export default Projects;
