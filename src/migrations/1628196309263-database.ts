import {MigrationInterface, QueryRunner} from "typeorm";

export class database1628196309263 implements MigrationInterface {
    name = 'database1628196309263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemons" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "number" integer NOT NULL, "image" character varying NOT NULL, "weight" integer NOT NULL, "height" integer NOT NULL, "baseExp" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sessions" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "token" character varying NOT NULL, CONSTRAINT "UQ_8dcbd3b879d447eb3324b0a6d50" UNIQUE ("userId", "token"), CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemon_user" ("id" SERIAL NOT NULL, "pokemonId" integer NOT NULL, "userId" integer NOT NULL, "inMyPokemons" boolean NOT NULL, CONSTRAINT "UQ_55a1fb15e9b1eb7bc6c26313588" UNIQUE ("pokemonId", "userId"), CONSTRAINT "PK_e50dc6725d377615fcc556ecfe7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokemon_user" ADD CONSTRAINT "FK_54eeafa45c1e52f1d6c49c2b8ee" FOREIGN KEY ("pokemonId") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokemon_user" ADD CONSTRAINT "FK_df2ff96947b4d6b45852a09ff77" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon_user" DROP CONSTRAINT "FK_df2ff96947b4d6b45852a09ff77"`);
        await queryRunner.query(`ALTER TABLE "pokemon_user" DROP CONSTRAINT "FK_54eeafa45c1e52f1d6c49c2b8ee"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6"`);
        await queryRunner.query(`DROP TABLE "pokemon_user"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "pokemons"`);
    }

}
