import mysql from "mysql";

const connection = mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"node"
  });
  
  connection.connect((err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log("Connect");
    }
  });

export default connection;