import { Router } from "express";


const router: Router = Router();

router.use("/", () => console.log("test"));

export const MainRouter: Router = router;
