import { Router } from "express";

import * as pokemonsController from "../controllers/pokemonsController";
import { authenticateToken } from "../middlewares/auth";

const router: Router = Router();

router.get("/pokemons", authenticateToken, pokemonsController.getAll);

router.post("/my-pokemons/:id/add", authenticateToken, pokemonsController.add);

router.post("/my-pokemons/:id/remove", authenticateToken, pokemonsController.remove);

export const pokemonsRouter: Router = router;
