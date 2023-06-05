import myData from "./data.js"


export const canView = (req,res)=>{
    if(req.body.ROLE === "ADMIN"){
        next();
    }
    for(let data of myData.projects){
        if(data.userId === req.body.userId){
            next();
        }
        else{
            res.send("Dont Access");
        }
    }
}

export const createProject = (req,res)=>{
    if(req.body.Role === "ADMIN"){
        next();
    }
    else{
        res.send("Not Allowed");
    }
}