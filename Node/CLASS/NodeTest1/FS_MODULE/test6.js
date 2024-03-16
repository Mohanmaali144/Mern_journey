import fs from "fs";

function readABC() {
  return new Promise((response, reject) => {
    fs.readFile("abc.txt", (err, data) => {
      err ? reject(err) : response(data);
    });
  });
}

function readXYZ() {
  return new Promise((response, reject) => {
    fs.readFile("xyz.txt", (err, data) => {
      err ? reject(err) : response(data);
    });
  });
}

Promise.all([readABC(), readXYZ()])
  .then((result) => {
    try {
      fs.writeFileSync("combine.txt", result[0] + "\n+" + result[1]);
      console.log("combine successfully ");
    } catch (err) {
      console.log(err + " errrrrrrrrrrrr");
    }
  })
  .catch((err) => {
    console.log(err);
  });
