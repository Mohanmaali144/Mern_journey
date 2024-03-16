import http from "http";
import url, { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

http
  .createServer((request, response) => {
    let parsedUrl = url.parse(request.url);
    let __filename = fileURLToPath(import.meta.url);
    let __dirname = path.dirname(__filename);

    if (parsedUrl.pathname == "/" || parsedUrl.pathname == "/home") {
      try {
        let indexFilePath = path.join(__dirname, "/index.html");
        let data = fs.readFileSync(indexFilePath);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      } catch (err) {
        let errorFilePath = path.join(__dirname, "/error.html");
        let data = fs.readFileSync(errorFilePath);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    } else if (parsedUrl.pathname == "/about") {
      try {
        let aboutFilePath = path.join(__dirname, "/about.html");
        let data = fs.readFileSync(aboutFilePath);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      } catch (error) {
        let errorFilePath = path.join(__dirname, "/error.html");
        let data = fs.readFileSync(errorFilePath);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    } else if (parsedUrl.pathname == "/contact") {
      try {
        let contactFilePath = path.join(__dirname, "/contect.html");
        let data = fs.readFileSync(contactFilePath);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      } catch (error) {
        let errorFilePath = path.join(__dirname, "/error.html");
        let data = fs.readFileSync(errorFilePath);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    } else if (parsedUrl.pathname == "/service") {
      try {
        let serviceFilePath = path.join(__dirname, "/services.html");
        let data = fs.readFileSync(serviceFilePath);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      } catch (error) {
        let errorFilePath = path.join(__dirname, "/error.html");
        let data = fs.readFileSync(errorFilePath);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    } else {
      let indexFilePath = path.join(__dirname, "/index.html");
      let data = fs.readFileSync(indexFilePath);
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  })
  .listen(3000, () => {
    console.log("server running...");
  });
