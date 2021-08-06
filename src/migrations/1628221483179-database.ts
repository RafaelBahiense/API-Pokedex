import {MigrationInterface, QueryRunner} from "typeorm";

export class database1628221483179 implements MigrationInterface {
    name = 'database1628221483179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "pokemons" ADD CONSTRAINT "UQ_81c732b327351b4631bab9f6844" UNIQUE ("name", "number")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemons" DROP CONSTRAINT "UQ_81c732b327351b4631bab9f6844"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
    }

}
