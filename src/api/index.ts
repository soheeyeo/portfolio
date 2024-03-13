import axios, { AxiosResponse } from 'axios';

const url = 'http://localhost:4000';

export const getAbout = async (): Promise<
    AxiosResponse<ApiAboutType> | undefined
> => {
    try {
        const about: AxiosResponse<ApiAboutType> = await axios.get(
            url + '/about',
        );
        return about;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
};

export const getProjects = async (): Promise<
    AxiosResponse<ApiProjectsType> | undefined
> => {
    try {
        const projects: AxiosResponse<ApiProjectsType> = await axios.get(
            url + '/projects',
        );
        return projects;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
};

export const getSkills = async (): Promise<
    AxiosResponse<ApiSkillsType> | undefined
> => {
    try {
        const skills: AxiosResponse<ApiSkillsType> = await axios.get(
            url + '/skills',
        );
        return skills;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
};
