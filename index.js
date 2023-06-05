import  express from "express";
import { basicAuth,hasRole } from "./middleware.js";
import { canView, createProject } from "./permission.js";
const app = express();

app.get("/",basicAuth,(req,res)=>{
  res.send("Welcome");
})

app.post("/makeProject",basicAuth,createProject,(req,res)=>{
  //logic
  res.send("Yeh You can");
})

app.get("/viewProject",basicAuth,canView,(req,res)=>{
  //logic
  res.send("Data");
});

app.listen(8080);