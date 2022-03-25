import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1648198595214 implements MigrationInterface {
    name = 'createTables1648198595214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vote" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "candidate_id" uuid, "contest_id" uuid, CONSTRAINT "REL_8056b2df70cd298ce447bc186f" UNIQUE ("candidate_id"), CONSTRAINT "REL_429f91e4b5752f16be3bf7b7ef" UNIQUE ("contest_id"), CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contest" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, CONSTRAINT "PK_ba048331bed7d939b857e9c1c63" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "candidate" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_b0ddec158a9a60fbc785281581b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_8056b2df70cd298ce447bc186fc" FOREIGN KEY ("candidate_id") REFERENCES "candidate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_429f91e4b5752f16be3bf7b7efc" FOREIGN KEY ("contest_id") REFERENCES "contest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_429f91e4b5752f16be3bf7b7efc"`);
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_8056b2df70cd298ce447bc186fc"`);
        await queryRunner.query(`DROP TABLE "candidate"`);
        await queryRunner.query(`DROP TABLE "contest"`);
        await queryRunner.query(`DROP TABLE "vote"`);
    }

}
