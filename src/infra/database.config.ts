import Container from "typedi";
import { ConnectionOptions } from "typeorm";
import { Connection, createConnection } from "typeorm";
import { DatabaseConfig } from "./config/TypeDefinition";

export async function connectDatabase(config: DatabaseConfig): Promise<void> {

  console.log(`Connection to Database uri: ${config.host}`);

  Container.set(Connection,
    await createConnection(config as ConnectionOptions)
      .then(() => {
        console.log(`Database successfully connected!`);
      }));
}