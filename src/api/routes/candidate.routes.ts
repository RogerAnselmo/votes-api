import { Router } from 'express';
import { CandidateController } from '@controllers/candidate.controller';
import { Request, Response } from 'express';
import Container from 'typedi';

const baseUrl = '/candidates';
const candidateRoutes = Router();
const controller = Container.get(CandidateController);

candidateRoutes.get(baseUrl, (req: Request, res: Response) =>
  controller.get(req, res),
);

candidateRoutes.post(baseUrl, (req: Request, res: Response) =>
  controller.create(req, res),
);

export { candidateRoutes as candidatesRoutes };
