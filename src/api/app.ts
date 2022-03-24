import express, { Application } from "express";
import Routes from "./routes";
import { Configuration } from '../infra/config'

const app: Application = express();
    app
    .use(express.json())
    .use('/api', Routes)
    .get('/', (req, res) => res.type('text').send(Configuration.RUNNING_SERVER_MESSAGE))
    .listen(Configuration.PORT, () => console.log(Configuration.STARTED_SERVER_MESSAGE))

export { app };