import { ContestController } from '../controllers/contest.controller';
import { Router } from 'express';
import Container from 'typedi';
import { Request, Response } from 'express';

const contestRoutes = Router();
const baseUrl = '/contests';
const controller = Container.get(ContestController);

contestRoutes.get(baseUrl, (req: Request, res: Response) =>
  controller.get(req, res),
);

contestRoutes.post(baseUrl, (req: Request, res: Response) =>
  controller.post(req, res),
);

export { contestRoutes };
