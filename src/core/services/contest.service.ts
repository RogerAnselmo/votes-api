import { Contest } from '@models/contest.model';
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export class ContestServcie {
  constructor(
    @InjectRepository(Contest) private repository: Repository<Contest>,
  ) {}

  async create(contest: Contest): Promise<void> {
    await this.repository.save(contest);
  }

  async get(): Promise<Contest[]> {
    return await this.repository.find({});
  }
}
