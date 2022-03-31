import { VoteController } from '@controllers/vote.controller';
import { NextFunction, Request, Response, Router } from 'express';
import Container from 'typedi';

const baseUrl = '/votes';
const controller = Container.get(VoteController);
const voteRoutes = Router();

voteRoutes.post(baseUrl, (req: Request, res: Response) =>
  controller.post(req, res),
);

voteRoutes.route(`${baseUrl}`).get(
  (req: Request, res: Response, next: NextFunction) => {
    next();
  },
  (req: Request, res: Response) => controller.get(req, res),
);

voteRoutes.get(`${baseUrl}/contest/:id`, (req: Request, res: Response) =>
  controller.getByContestId(req, res),
);

export { voteRoutes };
