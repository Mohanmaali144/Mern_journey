import { Router } from "express";
import {insertOrder} from "../controller/order.controller.js";

const orderRouter = Router();

orderRouter.post("/add", insertOrder);
export default orderRouter;
