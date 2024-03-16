import fs from "fs";

// for copy file
const writeFile = fs.createWriteStream("xyz.txt");
const readStream = fs.createReadStream("abc.txt");
readStream.pipe(writeFile);
