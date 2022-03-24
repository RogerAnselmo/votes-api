import { Candidate } from '../../core/models/candidate.model';
import { CandidatesService } from '../../core/services/candidates.services';
import { Request, Response } from 'express';
import { Service } from 'typedi';

@Service()
export class CandidateController {

     constructor(private service: CandidatesService) { }

    async create(req: Request, res: Response): Promise<void> {
        console.log(req.body)
        await this.service.save(req.body as Candidate);
        res.status(201).send("candidate has benn created succesfully");
    }

    async get(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.service.get();

            if (result) {
                res.status(200).json(result);
                return;
            }

            res.status(404).json({ message: 'no candidates found' });

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }

    find(req: Request, res: Response): void {
        res.status(404).send();
    }

    update(req: Request, res: Response): void {
        res.status(201).send();
    }
}