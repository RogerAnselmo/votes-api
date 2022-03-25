import { Router } from 'express';
import { candidatesRoutes } from './candidate.routes';
import { contestRoutes } from './contest.routes';

const Routes = Router();

Routes.use(candidatesRoutes);
Routes.use(contestRoutes);

export default Routes;
