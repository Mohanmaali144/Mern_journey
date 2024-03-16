import express from "express";
import path from "path";
import fs from "fs";
const app = express();
const port = 8000;

app.get("/file", (req, res) => {
  res.sendFile(path.join("D:/Mern/Node/CLASS/HTTPWebProject", "./image.jpeg"));
});

app.listen(port, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port  : " + port
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
