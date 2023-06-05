import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name:String,
    id:Number,
    timestamp:{
        type:Date,
        default:Date.now(),
    },
});

export default mongoose.model("studentModel",studentSchema);