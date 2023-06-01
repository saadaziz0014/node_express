const { log } = require("console");
const fs = require("fs");

fs.readdir(__dirname, (err, item) => {
  log(item);
});

//if err occur it show error
