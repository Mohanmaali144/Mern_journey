import { DataTypes } from "sequelize";
import { sequelize } from "../db/dbConfig.js";


const Category = sequelize.define("category",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Category.sync()
  .then(() => {
    console.log("Create Database Success fully");
  })
  .catch((err) => {
    console.log("Filad to create category tables");
  });

export default Category;
