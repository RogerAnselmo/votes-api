import { Contest } from '../../core/models/contest.model';
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export class ContestServcie {
  constructor(
    @InjectRepository(Contest) private contestRepository: Repository<Contest>,
  ) {}

  async create(contest: Contest): Promise<void> {
    await this.contestRepository.save(contest);
  }

  async get(): Promise<Contest[]> {
    return await this.contestRepository.find({});
  }
}
