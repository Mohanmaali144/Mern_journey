import http from "http";
import fs from "fs";
import url from "url";

const server = http.createServer((request, response) => {
  let parseUrl = url.parse(request.url, true);
  console.log(parseUrl);
  console.log(parseUrl.query);
  try {
    var indexdata = fs.readFileSync("./index.html");
    var contectdata = fs.readFileSync("./contect.html");
    var aboutdata = fs.readFileSync("./about.html");
    var servicedata = fs.readFileSync("./service.html");
  } catch (error) {
    response.end("page not found.");
  }

  if (request.url == "/" || request.url == "/home") {
    response.write(indexdata);
  } else if (request.url == "/about") {
    response.write(aboutdata);
  } else if (request.url == "/contact") {
    response.write(contectdata);
  } else if (request.url == "/service") {
    response.write(servicedata);
  } else if (request.url == "/add" || parseUrl.pathname == "/add") {
    let a = parseUrl.query.a * 1;
    let b = parseUrl.query.b * 1;
    response.write("ADDITION :  " + (a + b));
  }

  response.end();
});

server.listen(8000, () => {
  console.log("server started......");
});
