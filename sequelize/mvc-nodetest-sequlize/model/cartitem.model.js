import { DataTypes } from "sequelize";
import { sequelize } from "../dbConfig.js";

const cartitem = sequelize.define("cartitem", {
  cartItemId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    isNonNagative(value) {
      if (value < 1) {
        throw new Error("Qunatity must be greater then 0 ");
      }
    },
  },
});

cartitem
  .sync()
  .then((result) => {
    console.log("cartitem table created ");
  })
  .catch((err) => {
    console.log("cartitem table created to failed ");
  });

export default cartitem;
