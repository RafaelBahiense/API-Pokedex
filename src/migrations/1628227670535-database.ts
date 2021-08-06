import {MigrationInterface, QueryRunner} from "typeorm";

export class database1628227670535 implements MigrationInterface {
    name = 'database1628227670535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "password" TO "hash"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "hash" TO "password"`);
    }

}
