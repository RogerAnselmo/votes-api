import { config } from 'dotenv';
import * as path from 'path';
config({ path: path.join(__dirname, '../.env') });

import { useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
useContainer(Container);

import { DatabaseConfigValues } from '@config/database';
import { connectDatabase } from '@infra/database.config';

async function main() {
  await connectDatabase(DatabaseConfigValues);
  require('@app');
}

main();
