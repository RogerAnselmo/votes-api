import { Router } from "express";
import { CandidateController } from "../../controllers/candidate.controller";

const baseUrl = 'candidates'

const router = Router()

router.post(`/${baseUrl}`, ()=> CandidateController)