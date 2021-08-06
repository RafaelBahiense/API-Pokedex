import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";

import "../../src/config/env";
import app, { init } from "../../src/app";
import { RegisterUser, UserEntry } from "../factories/userFactory";
import cleanDB from "../utils/cleanDatabase";
import User from "../../src/entities/User";
import Sessions from "../../src/entities/Sessions";

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
const signUp = "/api/sign-up";
const signIn = "/api/sign-in";

describe("POST /sign-up", () => {
  it("returns status 400 for invalid email", async () => {
    const user = new RegisterUser({ email: "invalid Email" });

    const response = await agent.post(signUp).send(user);

    expect(response.status).toBe(400);
  });

  it("returns status 400 for invalid password", async () => {
    const user = new RegisterUser({ password: "" });

    const response = await agent.post(signUp).send(user);

    expect(response.status).toBe(400);
  });

  it("returns status 400 for when password and confirmation password do not match", async () => {
    const user = new RegisterUser({
      confirmPassword: "2.7182818284590452353602874713527",
    });

    const response = await agent.post(signUp).send(user);

    expect(response.status).toBe(400);
  });

  it("returns status 201 for valid params", async () => {
    const user = new RegisterUser({});

    const response = await agent.post(signUp).send(user);

    expect(response.status).toBe(201);
  });

  it("Registers user correctly", async () => {
    const user = new RegisterUser({});

    await agent.post(signUp).send(user);
    const result = await getRepository("users").findOne({ email: user.email });

    expect(result).toEqual(
      expect.objectContaining({
        email: user.email,
      })
    );
  });
});

describe("POST /sign-in", () => {
  it("returns status 400 for invalid email", async () => {
    const user = new UserEntry({ email: "invalid Email" });

    const response = await agent.post(signIn).send(user);

    expect(response.status).toBe(400);
  });

  it("returns status 400 for invalid password", async () => {
    const user = new UserEntry({ password: "" });

    const response = await agent.post(signIn).send(user);

    expect(response.status).toBe(400);
  });

  it("returns status 401 wrong credentials", async () => {
    const user = new UserEntry({});
    await agent.post(signUp).send(user);

    const newUser = new UserEntry({});
    const response = await agent.post(signIn).send(newUser);

    expect(response.status).toBe(401);
  });

  it("returns status 200 for valid params", async () => {
    const user = new RegisterUser({});
    await agent.post(signUp).send(user);

    const response = await agent.post(signIn).send(user);

    expect(response.status).toBe(200);
  });

  it("returns a valid token", async () => {
    const user = new RegisterUser({});
    await agent.post(signUp).send(user);

    const response = await agent.post(signIn).send(user);
    const resultUser = await getRepository(User).findOne({
      email: user.email as string,
    }) as User;
    const resultSession = await getRepository(Sessions).findOne({
      userId: resultUser.id,
    }) as Sessions;

    expect(response.body).toEqual(
      expect.objectContaining({
        token: resultSession.token,
      })
    );
  });
});
