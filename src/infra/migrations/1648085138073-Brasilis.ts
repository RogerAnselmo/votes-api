import {MigrationInterface, QueryRunner} from "typeorm";

export class Brasilis1648085138073 implements MigrationInterface {
    name = 'Brasilis1648085138073'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" ADD "asd" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" DROP COLUMN "asd"`);
    }

}
