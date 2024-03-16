import { DataTypes } from "sequelize";
import { sequelize } from "../dbConfig.js";

const order = sequelize.define("order", {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

order
  .sync()
  .then(() => {
    console.log("order table created Done");
  })
  .catch(() => {
    console.log("order table created to feild");
  });
export default order;
