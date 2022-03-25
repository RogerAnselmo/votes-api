import { Router } from 'express';
import { candidatesRoutes } from './candidate.routes';
import { contestRoutes } from './contest.routes';
import { voteRoutes } from './vote.routes';

const Routes = Router();

Routes.use(candidatesRoutes);
Routes.use(contestRoutes);
Routes.use(voteRoutes);

export default Routes;
