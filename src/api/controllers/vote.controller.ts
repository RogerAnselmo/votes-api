import { VoteService } from '@services/vote.service';
import { Request, Response } from 'express';
import { Service } from 'typedi';

@Service()
export class VoteController {
  constructor(private service: VoteService) {}

  async post(req: Request, res: Response): Promise<void> {
    await this.service.create(req.body);
    res.status(201).send('your vote was successfully stored');
  }

  async get(req: Request, res: Response) {
    res.status(200).json(await this.service.get());
  }

  async getByContestId(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.params.id)
      res.status(200).json(await this.service.getByContestId(req.params.id));
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
