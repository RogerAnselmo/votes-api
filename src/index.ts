import { config } from 'dotenv';
import * as path from 'path';
config({ path: path.join(__dirname, '../.env') });

import { useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
useContainer(Container);

import configuration from './infra/config'
import { connectDatabase } from './infra/database.config';


async function main() {
     await connectDatabase(configuration.Database);
     require('./api/app');
}

main();