import { Router } from 'express';
import getAbout from '../controllers/about';
import getProjects from '../controllers/projects';
import getSkills from '../controllers/skills';

const router: Router = Router();

router.get('/about', getAbout);
router.get('/projects', getProjects);
router.get('/skills', getSkills);

export default router;
