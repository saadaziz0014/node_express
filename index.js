import express from "express";
import bodyParser from "body-parser";
const app = express();
import { showData, insertData, updateManyData ,updateData, deleteData } from "./controller.js";
import './conn.js';
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/",showData);
app.post("/add",insertData);
app.put("/change/:name",updateManyData);
app.delete("/remove/:id",deleteData);
app.patch("/changeOne/:id",updateData);

app.listen(4500,()=>{
  console.log("Backend Running");
})