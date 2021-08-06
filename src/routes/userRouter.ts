import { Router } from "express";

import * as userController from "../controllers/userController";

const router: Router = Router();

router.post("/sign-up", userController.signUp);

router.post("/sign-in", userController.signIn);

export const userRouter: Router = router;
