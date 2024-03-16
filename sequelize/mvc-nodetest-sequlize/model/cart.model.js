import { DataTypes } from "sequelize";
import { sequelize } from "../dbConfig.js";

const cart = sequelize.define("cart", {
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

cart
  .sync()
  .then(() => {
    console.log("cart table created Done");
  })
  .catch(() => {
    console.log("cart table created to feild");
  });

export default cart;
