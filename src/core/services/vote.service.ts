import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { Vote } from '@models/vote.model';

@Service()
export class VoteService {
  constructor(@InjectRepository(Vote) private repository: Repository<Vote>) {}

  async create(vote: Vote): Promise<void> {
    await this.repository.save(vote);
  }

  async get(): Promise<Vote[]> {
    return await this.repository.find({});
  }

  async getByContestId(contest_id: string): Promise<Vote[]> {
    return await this.repository.find({ contest_id });
  }
}
