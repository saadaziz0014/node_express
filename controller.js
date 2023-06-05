import studentModel from "./studentModel.js"

export const showData = async(req,res)=>{
    const data = await studentModel.find();
    res.send(data);
};

export const insertData = async(req,res)=>{
    const {name,id} = req.body;
    const student = new studentModel({name,id});
    const result = await student.save();
    // console.log(result);
    res.send(result);
}

export const updateManyData = async(req,res)=>{
    const name = req.params;
    const id = req.body;
    const result = await studentModel.updateMany(name,{$set:id});
    res.send(result);
}

export const deleteData = async(req,res)=>{
    const id = req.params;
    const result = await studentModel.deleteOne(id);
    res.send(result);
}

export const updateData = async(req,res)=>{
    const id = req.params;
    const name = req.body;
    const result = await studentModel.updateOne(id,{$set:name});
    res.send(result);
}