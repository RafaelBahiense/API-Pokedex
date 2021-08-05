import { getRepository } from "typeorm";

import Pokemon from "../../../src/entities/Pokemon";
import Poke from "./Poke";
import consoleMessages from "./consoleMessages";

export default async function insertAllPokes(pokes: Poke[], count: number) {
  const pokeRepository = getRepository(Pokemon);

  for (let i = 0; i < count; i++) {
    consoleMessages(
      `Inserting pokemon in DB: id:${pokes[i].number} name:${pokes[i].name}`
    );
    pokeRepository.insert(pokes[i]);
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}
