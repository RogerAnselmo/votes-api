import express, { Application } from 'express';
import { EnvConfigValues } from '@config/evironment';
import Routes from '@routes/index';

const app: Application = express();
app
  .use(express.json())
  .use('/api', Routes)
  .get('/', (req, res) =>
    res.type('text').send(EnvConfigValues.RUNNING_SERVER_MESSAGE),
  )
  .listen(EnvConfigValues.PORT, () =>
    console.log(EnvConfigValues.STARTED_SERVER_MESSAGE),
  );

export { app };
