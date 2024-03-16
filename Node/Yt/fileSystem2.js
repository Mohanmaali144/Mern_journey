const fs = require("fs");
// fs.mkdir("Files",(err)=>{
//     console.log("Folder created succesfully")
// });

fs.writeFile("./Files/bio.txt", "hello i am a software devloper", (err) => {

    console.log("File created successfully..")
});

fs.readFile("./Files/bio.txt", "utf-8", (err, data) => {

    console.log(data);
});