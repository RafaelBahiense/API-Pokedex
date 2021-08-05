import getPoke from "./getPoke";
import getPokeDescription from "./getPokeDescription";
import Poke from "./Poke";

export default async function getAllPokes(APIURL: string, count: number) {
  const pokes: Poke[] = [];

  for (let i = 1; i < count + 1; i++) {
    const poke = await getPoke(`${APIURL}/pokemon/${i}`);
    poke.description =
      i > 30 ? "" : await getPokeDescription(`${APIURL}/characteristic/${i}`);
    pokes.push(poke);

    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  return pokes;
}
