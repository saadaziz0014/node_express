export const basicAuth = (req,res, next)=>{
    if(req.body == null){
        res.send("Sign In first");
    }
    next();
}

export const hasRole = (req,res,next)=>{
    if(req.body.role !== "ADMIN"){
        res.send("Not Allowed");
    }
    next();
}

