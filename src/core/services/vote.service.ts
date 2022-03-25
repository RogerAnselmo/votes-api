import { Vote } from '../../core/models/vote.model';
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export class VoteService {
  constructor(@InjectRepository(Vote) private repository: Repository<Vote>) {}

  async create(vote: Vote): Promise<void> {
    await this.repository.save(vote);
  }

  async getByContestId(contest_id: string): Promise<Vote[]> {
    return await this.repository.find({
      where: {
        contest_id,
      },
      order: {
        date: 'DESC',
      },
    });
  }
}
