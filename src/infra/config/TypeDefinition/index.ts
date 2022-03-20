export type ConfigurationType = {
    PORT: number,
    ENV: string,
    STARTED_SERVER_MESSAGE: string,
    RUNNING_SERVER_MESSAGE: string,
}

export type DatabaseConfig = {
    type: string,
   host: string,
   port: number,
   username: string,
   password: string,
   database: string,
   synchronize: boolean,
   logging: boolean,
   "entities": [
      "src/core/models/*.model.ts"
   ],
   "migrations": [
      "src/infra/migrations/*.ts"
   ],
   "cli": {
      "migrationsDir": "src/infra/migrations"
   }
}