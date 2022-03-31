import { Router } from 'express';
import { candidatesRoutes } from '@routes/candidate.routes';
import { contestRoutes } from '@routes/contest.routes';
import { voteRoutes } from '@routes/vote.routes';

const Routes = Router();

Routes.use(candidatesRoutes);
Routes.use(contestRoutes);
Routes.use(voteRoutes);

export default Routes;
