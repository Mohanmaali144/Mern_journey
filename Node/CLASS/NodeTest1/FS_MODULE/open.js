import fs from "fs";

console.log("open file");
fs.open("input2.txt", (err, fd) => {
  if (err) {
    return console.error(err);
  }
  console.log("File open successfully");
  console.log(fd);
});
