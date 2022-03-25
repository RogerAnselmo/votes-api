import { config } from 'dotenv';
import * as path from 'path';
config({ path: path.join(__dirname, '../.env') });


import {DatabaseConfigValues, DatabaseConfigType} from './infra/config/database'

import { useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
useContainer(Container);

import { connectDatabase } from './infra/database.config';

async function main() {
  await connectDatabase(DatabaseConfigValues);
  require('./api/app');
}

main();
