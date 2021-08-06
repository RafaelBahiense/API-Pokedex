import { getRepository } from "typeorm";

import Users from "../../src/entities/User";
import Pokemon from "../../src/entities/Pokemon";
import PokemonUser from "../../src/entities/Pokemon_Users";
import Sessions from "../../src/entities/Sessions";


export default async function cleanDB () {
  await getRepository(Users).query(`TRUNCATE TABLE users RESTART IDENTITY CASCADE`);
  await getRepository(Pokemon).query(`TRUNCATE TABLE pokemons RESTART IDENTITY CASCADE`);
  await getRepository(PokemonUser).query(`TRUNCATE TABLE pokemon_user RESTART IDENTITY CASCADE`);
  await getRepository(Sessions).query(`TRUNCATE TABLE sessions RESTART IDENTITY CASCADE`);
}