import { getConnection, createQueryBuilder, getRepository } from "typeorm";

import Pokemon from "../entities/Pokemon";
import User from "../entities/User";
import PokemonUser from "../entities/Pokemon_Users";

interface PokeReturn extends Pokemon {
    inMyPokemons?: boolean
}

export async function getAll(userId: number) {
  const pokemons: PokeReturn[] = await getRepository(Pokemon).find();
  const myPokes = await getRepository(PokemonUser).find({ where: { userId }, order: { pokemonId: "ASC" } });
  pokemons.map((pokemon, index) => {
    const result = myPokes.find(myPoke => myPoke.pokemonId === index + 1)
    pokemon.inMyPokemons = result ? true : false;
})
  return pokemons;
}

export async function add({
  pokemonId,
  userId,
}: {
  pokemonId: number;
  userId: number;
}) {
  await getRepository(PokemonUser).insert({
    pokemonId,
    userId,
    inMyPokemons: true,
  });
}

export async function remove({
  pokemonId,
  userId,
}: {
  pokemonId: number;
  userId: number;
}) {
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(PokemonUser)
    .where('"userId" = :userId', { userId })
    .andWhere('"pokemonId" = :pokemonId', { pokemonId })
    .execute();
}
