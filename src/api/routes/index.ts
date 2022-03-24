import { Router } from "express";
import { candidatesRoutes } from "./candidates.routes";

const Routes = Router();

Routes.use(candidatesRoutes);

export default Routes;