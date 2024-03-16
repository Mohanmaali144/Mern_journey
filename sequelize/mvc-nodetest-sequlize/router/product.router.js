import { Router } from "express";
import { auth } from "../middleware/authorize.js";
import { body } from "express-validator";
import {
  insertProduct,
  deleteProduct,
  getProduct,
  getProductList,
} from "../controller/product.controller.js";

const prodcutRouter = Router();
prodcutRouter.post(
  "/insert",
  body("title", "title is Required").notEmpty(),
  body("description", "description is Required").notEmpty(),
  body("price", "price is Required").notEmpty(),
  body("discountPercentage", "discountPercentage is Required").notEmpty(),
  body("rating", "rating is Required").notEmpty(),
  body("stock", "stock is Required").notEmpty(),
  body("brand", "brand is Required").notEmpty(),
  body("categoryname", "categoryname is Required").notEmpty(),
  body("thumbnail", "thumbnail is Required").notEmpty(),
  body("images", "images is Required").notEmpty(),
  insertProduct
);

prodcutRouter.delete(
  "/byId/:id",
  body("id", "id is required").notEmpty(),
  deleteProduct
);

prodcutRouter.get(
  "/byId/:id",
  body("id", "id is required").notEmpty(),
  getProduct
);

prodcutRouter.get("/list", auth, getProductList);
export default prodcutRouter;
