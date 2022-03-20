import { Request, Response } from 'express';

export class CandidateController {
    create(req: Request, res: Response): void {
        res.status(201).send("candidate has benn created succesfully");
    }


    get(req: Request, res: Response): void {
        res.status(404).send();
    }

    find(req: Request, res: Response): void {
        res.status(404).send();
    }

    update(req: Request, res: Response): void {
        res.status(201).send();
    }


}