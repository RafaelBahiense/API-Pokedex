import { NextFunction, Request, Response } from "express";

import * as userService from "../services/userService";
import { User, ReceivedUser } from "../interfaces/User";

export async function signUp(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, confirmPassword }: ReceivedUser = req.body;
    if (!(email && password && confirmPassword) || password !== confirmPassword)
      return res.sendStatus(400);
    await userService.register({ email, password, confirmPassword });

    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

export async function signIn(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password }: User = req.body;
    if (!(email && password)) return res.sendStatus(400);

    const token = await userService.login({ email, password });

    res.status(200).send({token});
  } catch (err) {
    next(err);
  }
}
