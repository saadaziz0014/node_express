//global and non-global module aur package

//const fs = require("fs"); //not neccessary for variable have same name
const fswrite = require("fs").writeFileSync;
console.log(5 + 6); //core module

//fs is non-global need to require it

//fs.writeFileSync("app.txt", "Data in App");

fswrite("code.txt", "Code write");
