import { error } from "console";
import fs from "fs";

const writeStream = fs.createWriteStream("abc.txt");
writeStream.write("it is a writes strem test");
writeStream.end();
writeStream.on("error", (error) => {
  console.log(error);
});

writeStream.on("finish", () => {
  console.log("success");
});
