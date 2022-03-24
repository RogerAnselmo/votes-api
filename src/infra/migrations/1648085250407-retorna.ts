import {MigrationInterface, QueryRunner} from "typeorm";

export class retorna1648085250407 implements MigrationInterface {
    name = 'retorna1648085250407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" RENAME COLUMN "asd" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" RENAME COLUMN "name" TO "asd"`);
    }

}
