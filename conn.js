import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});