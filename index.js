const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
  res.render("info");
})


app.post("/show",(req,res)=>{
  const formData = req.body;
  const jsonD = JSON.stringify(formData);
  const {name,age} = JSON.parse(jsonD);
  res.render("index",{name,age});
})

app.listen(4500);
