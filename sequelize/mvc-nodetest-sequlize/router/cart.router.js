import { Router } from "express";
import { createCart,deleteCart} from "../controller/cart.controller.js";
import { body } from "express-validator";
const cartRouter = Router();

cartRouter.post("/create/:userid",createCart);

cartRouter.delete("/delete/:userid",deleteCart);
export default cartRouter;
