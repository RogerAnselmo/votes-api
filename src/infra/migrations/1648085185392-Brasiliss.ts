import {MigrationInterface, QueryRunner} from "typeorm";

export class Brasiliss1648085185392 implements MigrationInterface {
    name = 'Brasiliss1648085185392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" RENAME COLUMN "name" TO "asd"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" RENAME COLUMN "asd" TO "name"`);
    }

}
