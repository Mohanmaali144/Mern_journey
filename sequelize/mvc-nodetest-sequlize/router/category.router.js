import { Router } from "express";
import { insertCat } from "../controller/category.controller.js";
import { body } from "express-validator";
const catRouter = Router();
catRouter.post("/insert", body("name", "Category name Required"), insertCat);
export default catRouter;
