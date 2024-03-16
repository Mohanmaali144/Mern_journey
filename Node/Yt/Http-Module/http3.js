
const http = require("http");

const server = http.createServer((req,res)=>{

    if(req.url == "/"){
        res.end("home side");
    }else if(req.url=="/about"){
        res.end("about side");
    }else{
        res.end("404 page not found");
    }
});

server.listen(3000,()=>{
    console.log("server started.....")
});