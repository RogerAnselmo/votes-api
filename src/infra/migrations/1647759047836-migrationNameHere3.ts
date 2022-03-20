import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationNameHere31647759047836 implements MigrationInterface {
    name = 'migrationNameHere31647759047836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" ADD "brazante" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" DROP COLUMN "brazante"`);
    }

}
