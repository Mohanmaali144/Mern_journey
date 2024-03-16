const http =  require("http");

const server =  http.createServer((res,req)=>{
    req.end("hello by user...");
});

server.listen(8000,()=>{
console.log("listion port number....")
});