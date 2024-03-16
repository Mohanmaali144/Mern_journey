import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
  console.log("start");
  let infom = `${new Date().toLocaleString()}  :  ${request.url}  new Request \n`;
  fs.appendFile("userinfo.txt", infom, (err, data) => {
    switch (request.url) {
      case "/":
        response.end("Home page");
        break;
      case "/about":
        response.end("About page");
        break;
      case "/contect":
        response.end("contect page");
        break;

      case "/info": {
        fs.readFile("userinfo.txt", (err, data) => {
          err
            ? console.log("eroror file opnening. ..")
            : response.end(data);
        });
        // response.end("Home page");
        break;
      }
    }
  });

  //   response.end("server started..");
});

server.listen(8000, () => {
  console.log("server lestening on poer no. 8000");
});
server.on("connect", () => {
  console.log("connection success....");
});

server.on("close", () => {
  console.log("server closed");
});

server.on("error", () => {
  console.log("some error occure");
});

let requestcount = 0;
server.on("request", () => {
  requestcount++;
});

// setTimeout(() => {
//   server.close();
//   console.log("all request  : " + requestcount);
// }, 1000 * 10);

console.log("first");
