import fs from "fs";

fs.readFile("./input2.txt", (err, data) => {
  if (err) {
    console.log(data);
  }
  console.log(data.toString());
});
console.log("continue...")
let data = fs.readFileSync("./input2.txt");
   
  console.log(data.toString()+"  syncron")