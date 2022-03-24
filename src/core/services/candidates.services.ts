import { Service } from "typedi";
import { getConnectionManager, getManager, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Candidate } from "../models/candidate.model";

@Service()
export class CandidatesService {
    @InjectRepository(Candidate) 
    private readonly repository: Repository<Candidate>;
    // constructor(@InjectRepository(Candidate) private repository: Repository<Candidate>) { }

    async save(candidate: Candidate): Promise<void> {
        await this.repository.save(candidate);
    };

    async get(): Promise<Candidate[]>{
        return await this.repository.find({});
    };
}