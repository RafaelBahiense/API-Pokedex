import { Router } from "express";

import { userRouter } from "./userRouter";
import { pokemonsRouter } from "./pokemonsRouter";

const router: Router = Router();

router.use(userRouter);
router.use(pokemonsRouter);

export const MainRouter: Router = router;
