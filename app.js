const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from api");
});

app.get("/data", (req, res) => {
  data = {
    name: "Priyanshu parate",
    age: 33,
  };
  res.send(data);
});
app.listen(port, () => console.log("api server started "));
