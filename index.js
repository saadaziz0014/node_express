const path = require("path");
const process = require("process");
const fs = require("fs");
const { log } = require("console");

const add = () => {
  fs.writeFileSync(
    path.join(__dirname, `public/${process.argv[3]}`),
    process.argv[4]
  );
};

const remove = () => {
  fs.unlinkSync(path.join(__dirname, `public/${process.argv[3]}`));
};

const update = () => {
  fs.appendFile(
    path.join(__dirname, `public/${process.argv[3]}`),
    " Appending ",
    (err) => {
      if (err) {
        log(err);
      }
    }
  );
};

const read = () => {
  fs.readFile(
    path.join(__dirname, `public/${process.argv[3]}`),
    "utf8",
    (err, item) => {
      log(item);
    }
  );
};

const rename = () => {
  fs.rename(
    path.join(__dirname, `public/${process.argv[3]}`),
    path.join(__dirname, `public/${process.argv[4]}`),
    (err) => {
      if (err) {
        log(err);
      }
    }
  );
};

if (process.argv[2] == "add") {
  add();
} else if (process.argv[2] == "remove") {
  remove();
} else if (process.argv[2] == "update") {
  update();
} else if (process.argv[2] == "read") {
  read();
} else if (process.argv[2] == "rename") {
  rename();
}
