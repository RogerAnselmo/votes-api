
import { ContestServcie } from '../../core/services/contest.service';
import { Request, Response } from 'express';
import { Service } from 'typedi';

@Service()
export class ContestController {
  constructor(private service: ContestServcie) {}

  async post(req: Request, res: Response): Promise<void> {
    await this.service.create(req.body);
    res.status(201).send('constes created successfully');
  }

  async get(req: Request, res: Response): Promise<void> {
    res.status(200).json(await this.service.get());
  }
}
