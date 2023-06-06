import express from "express";
import { deleteData, getData, insertData, updateData } from "./controller.js";
const app = express();
app.use(express.json());


app.get("/",getData);
app.post("/",insertData)
app.put("/:name",updateData);
app.delete("/:name",deleteData);
app.listen(3000);