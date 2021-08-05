import axios from "axios";

import Poke from "./Poke";
import consoleMessages from "./consoleMessages";

export default async function getPoke(APIURL: string): Promise<Poke> {
  const request = await axios.get(APIURL);

  const {
    species: { name },
    id: number,
    sprites: { front_default: image },
    weight,
    height,
    base_experience: baseExp,
  } = request.data;

  consoleMessages(`fetching pokemon: id:${number} name:${name}`);
  return { name, number, image, weight, height, baseExp, description: "" };
}
