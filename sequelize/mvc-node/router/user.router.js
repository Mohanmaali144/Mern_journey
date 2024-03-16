import { Router } from "express";
import { registerUser, signin } from "../controller/user.controller.js";

const router = Router();

router.post("/signup", registerUser);
router.post("/signin", signin);

export default router;
