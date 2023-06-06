import connection from "./conn.js";


export const getData = (req,res)=>{
    connection.query("Select * from user",(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}

export const insertData = (req,res)=>{
    const data = req.body;
    connection.query("insert into user set?",data,(err,result,field)=>{
        err ? res.send(err) : res.send(result)
    })
}

export const updateData = (req,res)=>{
    const name = req.params.name;
    const age = req.body.age;
    const data = [age,name];
    connection.query("update user set age=? where name=?",data,(err,result)=>{
        err ? res.send(err) : res.send(result);
    })
}

export const deleteData = (req,res)=>{
    const name = req.params.name;
    connection.query(`delete from user WHERE name='${name}'`,(err,result)=>{
        err ? res.send(err) : res.send(result)});
};