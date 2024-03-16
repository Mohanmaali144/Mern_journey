import { Sequelize } from "sequelize";

const sequelize = new Sequelize("seqtest", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = async ()=>{
    try {
        sequelize.authenticate()
        console.log("Mysql connection Done !!");
    } catch (error) {
        console.log("Connection failed");
    }
}

export {connectDB,sequelize}