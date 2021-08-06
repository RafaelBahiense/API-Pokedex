import { getRepository } from "typeorm";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../entities/User";
import Sessions from "../entities/Sessions";
import { ReceivedUser, User as UserInterface } from "../interfaces/User";
import { Register, Login } from "../schemas/schema";
import * as error from "../types/errorTypes";
import { jwtConfigs, secret } from "../config/jwt";

export async function register({
  email,
  password,
  confirmPassword,
}: ReceivedUser) {
  await Register.validateAsync({ email, password, confirmPassword });
  const hash = bcrypt.hashSync(password, 12);

  await getRepository(User).insert({ email, hash });
}

export async function login({ email, password }: UserInterface) {
  await Login.validateAsync({ email, password });

  const result = await getRepository(User).findOne({ email });

  error.service.notExistent();
  if (!result) throw error.service;

  error.service.wrongPassword()
  if (!bcrypt.compareSync(password, result.hash))
    throw error.service;

  const token = JWT.sign({ id: result.id, email }, secret, jwtConfigs);
  await getRepository(Sessions).insert({ userId: result.id, token });

  return token;
}
