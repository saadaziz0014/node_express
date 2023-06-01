const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Sent");
});

app.get("/about", (req, res) => {
  const data = req.query.id;
  res.send(data);
}); //http://localhost:4500/about?id=5

app.get("/file", (req, res) => {
  res.send("<h1>Saad</h1>");
});

app.get("/json", (req, res) => {
  res.send({
    age: 25,
    id: 7,
  });
});

app.listen(4500);
