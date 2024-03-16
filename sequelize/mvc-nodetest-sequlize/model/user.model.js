import { DataTypes } from "sequelize";
import { sequelize } from "../dbConfig.js";
import bycrypt from "bcryptjs";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      let saltKey = bycrypt.genSaltSync(8);
      let encryptedPassword = bycrypt.hashSync(value, saltKey);
      this.setDataValue("password", encryptedPassword);
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    unique: true,
  },
});

User.sync()
  .then(() => {
    console.log("User table created Done");
  })
  .catch(() => {
    console.log("User table faild to create");
  });

  User.checkPassword = (originalpassword,encryptedPassword)=>{
    return bycrypt.compareSync(originalpassword,encryptedPassword);
  }


export default User;
