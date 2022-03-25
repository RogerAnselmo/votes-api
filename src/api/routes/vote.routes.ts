import { VoteController } from 'api/controllers/vote.controller';
import { Request, Response, Router } from 'express';
import Container from 'typedi';

const baseUrl = '/votes';
const controller = Container.get(VoteController);
const voteRoutes = Router();

voteRoutes.post(baseUrl, (req: Request, res: Response) =>
  controller.post(req, res),
);

voteRoutes.get(`${baseUrl}/contest/:id`, (req: Request, res: Response) =>
  controller.getByContestId(req, res),
);

export { voteRoutes };
