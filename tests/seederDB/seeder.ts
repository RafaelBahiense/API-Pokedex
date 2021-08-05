import "./config/env";
import connectDatabase from "../../src/config/database";
import getAllPokes from "./functions/getAllPokes";
import insertAllPokes from "./functions/insertAllPokes";

async function main() {
  const APIURL = "https://pokeapi.co/api/v2/";
  const count = parseInt(process.env.POKE_COUNT || "898");
  const pokes = await getAllPokes(APIURL, count);
  await connectDatabase();
  await insertAllPokes(pokes, count);
}

main()
  .then(() => {
    console.log("\n\nDone");
    process.exit(0);
  })
  .catch((e) => console.log(e));
