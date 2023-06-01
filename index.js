const { log } = require("console");
const process = require("process");
const path = require("path");
const fs = require("fs");

const publicPath = path.join(__dirname, "public");
const filePath = `${publicPath}/${process.argv[2]}`;

log(process.argv);

fs.writeFileSync(filePath, "Good to See You");
