import { DataTypes } from "sequelize";
import { sequelize } from "../dbConfig.js";

const category = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

category
  .sync()
  .then(() => {
    console.log("category table created Done");
  })
  .catch(() => {
    console.log("category table created to feild");
  });


  export default category;