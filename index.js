const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname,"public")));
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

app.get("/about",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/about.html"));
})

app.listen(4500);
