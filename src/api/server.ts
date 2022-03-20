import express, { Application } from "express";
import Routes from './routes'
import { ConfigurationType } from "../infra/config/TypeDefinition";

const app: Application = express();

const Server = {
    start: (configuration: ConfigurationType) => 
        app
        .use('/api', Routes)
        .get('/', (req, res) => res.type('text').send(configuration.RUNNING_SERVER_MESSAGE))
        .listen(configuration.PORT, () => console.log(configuration.STARTED_SERVER_MESSAGE))
}

export default Server;