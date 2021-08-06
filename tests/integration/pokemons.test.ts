import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";

import "../../src/config/env";
import app, { init } from "../../src/app";
import { GenPokemon } from "../factories/pokemonFactory";
import { RegisterUser, UserEntry } from "../factories/userFactory";
import cleanDB from "../utils/cleanDatabase";
import User from "../../src/entities/User";
import Sessions from "../../src/entities/Sessions";
import Pokemon from "../../src/entities/Pokemon";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDB();
});

afterAll(async () => {
  await getConnection().close();
});

const agent = supertest(app);
const pokemons = "/api/pokemons";
const myPokemons = "/api/my-pokemons/";
const signUp = "/api/sign-up";
const signIn = "/api/sign-in";

describe("GET /pokemons", () => {
  it("returns status 401 without a token", async () => {
    const response = await agent.get(pokemons);

    expect(response.status).toBe(401);
  });

  it("returns status 200", async () => {
    const user = new RegisterUser({});
    await agent.post(signUp).send(user);

    const loginResponse = await agent.post(signIn).send(user);
    const pokemon = new GenPokemon();
    await getRepository(Pokemon).insert(pokemon);

    const response = await agent
      .get(pokemons)
      .set("Authorization", `Bearer ${loginResponse.body.token}`);

    expect(response.status).toBe(200);

    expect(response.body[0]).toEqual(pokemon);
  });
});

describe("POST /my-pokemons/:id/add", () => {
  it("returns status 401 without a token", async () => {
    const response = await agent.post(myPokemons + "1/add");

    expect(response.status).toBe(401);
  });

  it("returns status 200", async () => {
    const user = new RegisterUser({});
    await agent.post(signUp).send(user);

    const loginResponse = await agent.post(signIn).send(user);
    const pokemon = new GenPokemon();
    await getRepository(Pokemon).insert(pokemon);

    const response = await agent
      .post(myPokemons + "1/add")
      .set("Authorization", `Bearer ${loginResponse.body.token}`);

    expect(response.status).toBe(200);
  });
});

describe("POST /my-pokemons/:id/remove", () => {
  it("returns status 401 without a token", async () => {
    const response = await agent.post(myPokemons + "1/remove");

    expect(response.status).toBe(401);
  });

  it("returns status 200", async () => {
    const user = new RegisterUser({});
    await agent.post(signUp).send(user);

    const loginResponse = await agent.post(signIn).send(user);
    const pokemon = new GenPokemon();
    await getRepository(Pokemon).insert(pokemon);

    const response = await agent
      .post(myPokemons + "1/remove")
      .set("Authorization", `Bearer ${loginResponse.body.token}`);

    expect(response.status).toBe(200);
  });
});
