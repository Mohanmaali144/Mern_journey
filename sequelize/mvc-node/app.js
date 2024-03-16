import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "./db/dbConfig.js";
import catRouter from "./router/category.router.js";
import userRouter from "./router/user.router.js";
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/catergories", catRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Mysql Fail to connect !!!", err);
  });
