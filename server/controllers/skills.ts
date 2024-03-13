import { Response, Request } from 'express';
import { Iskills } from '../types/skills';
import Skills from '../model/skills';

const getSkills = async (req: Request, res: Response): Promise<void> => {
    try {
        const skills: Iskills[] = await Skills.find();
        res.status(200).json({ skills });
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
};

export default getSkills;
