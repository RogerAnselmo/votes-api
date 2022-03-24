import { Router } from "express";
import { CandidateController } from "../controllers/candidate.controller";
import { Request, Response } from 'express';
import Container from "typedi";

const baseUrl = 'candidates';
const candidatesRoutes = Router();
const controller = Container.get(CandidateController);

candidatesRoutes.get(`/${baseUrl}`, (req: Request, res: Response) => controller.get(req, res));
candidatesRoutes.post(`/${baseUrl}`, (req: Request, res: Response) => controller.create(req, res));

export { candidatesRoutes };