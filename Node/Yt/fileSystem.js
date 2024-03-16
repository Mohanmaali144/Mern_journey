const fs = require("fs");

fs.writeFileSync("file.txt", "Hello i am mern stack devloper");
fs.writeFileSync("file.txt", "Hello i am mern stack devloper JavaScript,node");
fs.appendFileSync("file.txt", "     Apend the text");

console.log(fs.readFileSync("file.txt").toString());
fs.renameSync("file.txt", "myfile.txt");