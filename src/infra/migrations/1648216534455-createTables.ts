import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1648216534455 implements MigrationInterface {
    name = 'createTables1648216534455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "candidate" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_b0ddec158a9a60fbc785281581b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vote" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "candidate_id" uuid NOT NULL, "contest_id" uuid NOT NULL, CONSTRAINT "REL_8056b2df70cd298ce447bc186f" UNIQUE ("candidate_id"), CONSTRAINT "REL_429f91e4b5752f16be3bf7b7ef" UNIQUE ("contest_id"), CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contest" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, CONSTRAINT "PK_ba048331bed7d939b857e9c1c63" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contest_candidates_candidate" ("contestId" uuid NOT NULL, "candidateId" uuid NOT NULL, CONSTRAINT "PK_7be83a4d220ece648eab67398b8" PRIMARY KEY ("contestId", "candidateId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f7479ad1e703ed95fa26dd1843" ON "contest_candidates_candidate" ("contestId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f2ee848d145b66288620338636" ON "contest_candidates_candidate" ("candidateId") `);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_8056b2df70cd298ce447bc186fc" FOREIGN KEY ("candidate_id") REFERENCES "candidate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_429f91e4b5752f16be3bf7b7efc" FOREIGN KEY ("contest_id") REFERENCES "contest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contest_candidates_candidate" ADD CONSTRAINT "FK_f7479ad1e703ed95fa26dd1843f" FOREIGN KEY ("contestId") REFERENCES "contest"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "contest_candidates_candidate" ADD CONSTRAINT "FK_f2ee848d145b662886203386365" FOREIGN KEY ("candidateId") REFERENCES "candidate"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contest_candidates_candidate" DROP CONSTRAINT "FK_f2ee848d145b662886203386365"`);
        await queryRunner.query(`ALTER TABLE "contest_candidates_candidate" DROP CONSTRAINT "FK_f7479ad1e703ed95fa26dd1843f"`);
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_429f91e4b5752f16be3bf7b7efc"`);
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_8056b2df70cd298ce447bc186fc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f2ee848d145b66288620338636"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f7479ad1e703ed95fa26dd1843"`);
        await queryRunner.query(`DROP TABLE "contest_candidates_candidate"`);
        await queryRunner.query(`DROP TABLE "contest"`);
        await queryRunner.query(`DROP TABLE "vote"`);
        await queryRunner.query(`DROP TABLE "candidate"`);
    }

}
