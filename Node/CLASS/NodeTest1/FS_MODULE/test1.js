import fs from "fs";


let data = fs.readFile("./input.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});


