import { error } from "console";
import fs from "fs";

const readStream = fs.createReadStream("abc.txt");

let filedata = "";
readStream.on("data", (chunk) => {
  filedata += chunk;
});
readStream.on("error", (error) => {
  console.log(error);
});

readStream.on("end", () => {
  console.log(filedata);
});

// setTimeout(() => {
//   console.log(filedata +"   hello......");
// }, 1000);
