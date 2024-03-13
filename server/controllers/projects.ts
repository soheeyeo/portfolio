import { Response, Request } from 'express';
import { Iprojects } from '../types/projects';
import Projects from '../model/projects';

const getProjects = async (req: Request, res: Response): Promise<void> => {
    try {
        const projects: Iprojects[] = await Projects.find();
        res.status(200).json({ projects });
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
};

export default getProjects;
