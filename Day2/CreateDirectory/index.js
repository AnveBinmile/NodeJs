const fs = require("fs");

fs.mkdirSync("foo");
console.log("after mkdirSync");

try {
  fs.mkdir()
} catch (e) {
  console.log("after mkdirSync ",e);
}

console.log("after mkdirSync");
