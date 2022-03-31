import Container from 'typedi';
import { ConnectionOptions } from 'typeorm';
import { Connection, createConnection } from 'typeorm';
import { DatabaseConfigType } from '@config/database';

export async function connectDatabase(
  config: DatabaseConfigType,
): Promise<void> {
  console.log(`Connection to Database uri: ${config.host}`);

  Container.set(
    Connection,
    await createConnection(config as ConnectionOptions).then(() => {
      console.log(`Database successfully connected!`);
    }),
  );
}
