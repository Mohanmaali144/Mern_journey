const http = require("http");
const fs = require("fs");


const myserver = http.createServer((req,res)=>{
    var date = new Date().toLocaleDateString();
    var loginD = date + ": saved user Deatails\n"
    fs.writeFileSync("data.txt",loginD);
    fs.appendFile("./d.txt",loginD,(err,data)=>{

        err ? console.log(err) : res.end('Hello server');
    });

    console.log(req);

});

myserver.listen(3000,()=> console.log('server start'));