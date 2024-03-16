import express from "express";
import { connectDB } from "./dbConfig.js";
import bodyParser from "body-parser";
import userRouter from "./router/user.router.js";
import catRouter from "./router/category.router.js";
import prodcutRouter from "./router/product.router.js";
import cartRouter from "./router/cart.router.js";
import cartitemRouter from "./router/cartitem.router.js";
import orderRouter from "./router/order.router.js";
import "./model/association.js";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/user", userRouter);
app.use("/api/category", catRouter);
app.use("/api/product", prodcutRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cartitem", cartitemRouter);
app.use("/api/order", orderRouter);
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server run on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log(`Somthing went wrong `);
  });
