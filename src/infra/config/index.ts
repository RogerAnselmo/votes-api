import { cliConfig } from "./database";
import { ConfigurationType, DatabaseConfig } from "./TypeDefinition";

export const Configuration = {
    PORT: Number(process.env.PORT),
    ENV: process.env.NODE_ENV,
    STARTED_SERVER_MESSAGE: `server listening on PORT = ${process.env.PORT}`,
    RUNNING_SERVER_MESSAGE: process.env.RUNNING_SERVER_MESSAGE
} as ConfigurationType

export const Database = {
    type: process.env.DATABASE_POSTGRES_TYPE,
    host: process.env.DATABASE_POSTGRES_HOST,
    port: Number(process.env.DATABASE_POSTGRES_PORT),
    username: process.env.DATABASE_POSTGRES_NAME,
    password: process.env.DATABASE_POSTGRES_PASSWORD,
    database: process.env.DATABASE_POSTGRES_NAME,
    synchronize: true,
    logging: false,
    entities: [
        "src/core/models/*.model.ts"
    ],
    migrations: [
        "src/infra/migrations/*.ts"
    ],
    cli: {
        migrationsDir: "src/infra/migrations"
    } as cliConfig
} as DatabaseConfig


export default {Configuration, Database}