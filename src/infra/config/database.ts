export type DatabaseConfigType = {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    logging: boolean;
    entities: string[];
    migrations: string[];
    cli: cliConfigType;
  };
  
  export type cliConfigType = {
    migrationsDir: string;
  };
  
  
  export const DatabaseConfigValues = {
    type: process.env.DATABASE_POSTGRES_TYPE,
    host: process.env.DATABASE_POSTGRES_HOST,
    port: Number(process.env.DATABASE_POSTGRES_PORT),
    username: process.env.DATABASE_POSTGRES_NAME,
    password: process.env.DATABASE_POSTGRES_PASSWORD,
    database: process.env.DATABASE_POSTGRES_NAME,
    synchronize: true,
    logging: false,
    entities: ['src/core/models/*.model.ts'],
    migrations: ['src/infra/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/infra/migrations',
    } as cliConfigType,
  } as DatabaseConfigType;