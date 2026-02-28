import { Router } from "express";
import { getProblem } from "../controllers/problem.controller";

const router = Router();

router.get("/", getProblem);

export default router;
