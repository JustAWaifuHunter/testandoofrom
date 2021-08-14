const fromJs = require("from-module");

const express = fromJs.get("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(3000, () => {
  console.log(
    `Express running → http://localhost:${server.address().port}`
  );
});