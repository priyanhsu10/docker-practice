const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from api");
});

app.get("/data", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((res) => res.json())
    .then((r) => res.send(r));
});
app.listen(port, () => console.log("api server started "));
