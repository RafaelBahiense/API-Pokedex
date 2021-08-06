import { NextFunction, Request, Response } from "express";

import * as pokemonsService from "../services/pokemonsService";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const pokemonId = parseInt(req.params["id"]);
    const userId = parseInt(res.locals.user.id)

    const pokemons = await pokemonsService.getAll(userId);
    res.status(200).send(pokemons);
  } catch (err) {
    next(err);
  }
}

export async function add(req: Request, res: Response, next: NextFunction) {
    try {
      const pokemonId = parseInt(req.params["id"]);
      const userId = parseInt(res.locals.user.id)

      await pokemonsService.add({pokemonId, userId});
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
    try {
      const pokemonId = parseInt(req.params["id"]);
      const userId = parseInt(res.locals.user.id)

      await pokemonsService.remove({pokemonId, userId});
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
}