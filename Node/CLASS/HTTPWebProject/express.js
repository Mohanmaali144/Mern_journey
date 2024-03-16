import express from "express";
import fs from "fs";
const app = express();
const port = 8000;
try {
  var indexdata = fs.readFileSync("./index.html");
  var contectdata = fs.readFileSync("./contect.html");
  var aboutdata = fs.readFileSync("./about.html");
  var servicedata = fs.readFileSync("./service.html");
} catch (error) {
  console.log(error);
}

// app.get("/", (req, res) => {
//   res.status(200);
//   res.send(indexdata);
// });

app.use(express.json()); 
app.post('/', (req, res)=>{ 
    const {name} = req.body;  
    const {age} = req.body;  
    res.send(`Welcome ${name}`); 
   
})


app.listen(port, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port  : " + port
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
