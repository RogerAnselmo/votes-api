export default {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'p@ssw0rd',
    database: 'postgres',
    synchronize: true,
    entities: [
        "./src/core/models/*.model.ts"
    ],
    migrations: [
        "./src/infra/migrations/*.ts"
    ],
    cli: {
        migrationsDir: "./src/infra/migrations"
    }
}