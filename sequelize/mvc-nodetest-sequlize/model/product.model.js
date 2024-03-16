import { sequelize } from "../dbConfig.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define("Product", {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.FLOAT,
  discountPercentage: DataTypes.FLOAT,
  rating: DataTypes.FLOAT,
  stock: DataTypes.INTEGER,
  brand: DataTypes.STRING,
  categoryname: DataTypes.STRING,
  thumbnail: DataTypes.STRING,
  images: DataTypes.STRING(1000),
});

sequelize
  .sync()
  .then(() => {
    console.log("Product table created");
  })
  .catch((err) => {
    console.log(err);
    console.log("feild to create product tabale");
  });

export default Product;
