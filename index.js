//pass function in parameter and http server

const http = require("http");

const fileData = (req, res) => {
  res.write("<h1>Data Write</h1>");
  res.end();
};

http.createServer(fileData).listen(4500);
