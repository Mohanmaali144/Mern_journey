import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
  try {
    var indexdata = fs.readFileSync("./index.html");
    var contectdata = fs.readFileSync("./contect.html");
    var aboutdata = fs.readFileSync("./about.html");
    var servicedata = fs.readFileSync("./service.html");
  } catch (error) {
    response.end("page not found.");
  }

  switch (request.url) {
    case "/":
      response.write(indexdata);
      break;
    case "/about":
      response.write(aboutdata);
      break;
    case "/contect":
      response.write(contectdata);
      break;

    case "/service":
      response.write(servicedata);
      break;
  }
});

server.listen(3000, () => {
  console.log("server started......");
});
