import { Response, Request } from 'express';
import { Iabout } from '../types/about';
import About from '../model/about';

const getAbout = async (req: Request, res: Response): Promise<void> => {
    try {
        const about: Iabout[] = await About.find();
        res.status(200).json({ about });
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
};

export default getAbout;
