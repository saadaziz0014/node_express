const http = require("http");
const d = require("./data.js");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    //res.write("Good");
    res.write(JSON.stringify(d));
    res.end();
  })
  .listen(4500);
