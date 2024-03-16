import { DataTypes } from "sequelize";
import { sequelize } from "../db/dbConfig.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync()
  .then(() => console.log(`created successfully user table`))
  .catch((error) => console.log(`Filad to create user table`, error));
export default User;
