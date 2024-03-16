import { Router } from "express";
import {
  insertCartitem,
  increaseQuantity,
  decreaseQuantity,
} from "../controller/cartitem.controller.js";
import { body } from "express-validator";

const cartitemRouter = Router();
cartitemRouter.post(
  "/insert",
  body("productId", "ProductId required ").notEmpty(),
  body("cartId", "cartId Required").notEmpty(),
  body("quantity", "Quantity is required ").notEmpty(),
  insertCartitem
);

cartitemRouter.post(
  "/increase-quantity",
  body("quantity", "Quantity is required ").notEmpty(),
  increaseQuantity
);

cartitemRouter.post(
  "/decrease-quantity",
  body("quantity", "Quantity is required ").notEmpty(),
  decreaseQuantity
);
export default cartitemRouter;
