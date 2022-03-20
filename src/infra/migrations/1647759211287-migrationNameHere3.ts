import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationNameHere31647759211287 implements MigrationInterface {
    name = 'migrationNameHere31647759211287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" ADD "chaama" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" DROP COLUMN "chaama"`);
    }

}
