import express from 'express';
import { ProjectControllers } from './project.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
    '/',
    auth(),
    ProjectControllers.addProject,
);
router.get(
    '/',
    ProjectControllers.getAllProjects,
);

export const ProjectRoutes = router;
